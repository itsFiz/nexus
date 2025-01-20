// lib/db.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Better type safety for global Prisma instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Error handling utility
export class DatabaseError extends Error {
  constructor(message: string, public statusCode = 500) {
    super(message);
    this.name = 'DatabaseError';
  }
}

// Wrapper for database operations
export async function dbOperation<T>(
  operation: () => Promise<T>,
  errorMessage = 'Database operation failed'
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    console.error('Database error:', error);
    throw new DatabaseError(errorMessage);
  }
}

// Query helper with pagination
export async function paginatedQuery<
  T extends keyof typeof prisma,
  ModelClient = (typeof prisma)[T]
>(
  model: T,
  {
    page = 1,
    limit = 10,
    where = undefined,
    orderBy = undefined,
    include = undefined,
  }: {
    page?: number;
    limit?: number;
    where?: ModelClient extends { findMany: (args: { where?: Record<string, unknown> }) => unknown } 
      ? Parameters<ModelClient['findMany']>[0]['where'] 
      : never;
    orderBy?: ModelClient extends { findMany: (args: { orderBy?: Record<string, unknown> }) => unknown }
      ? Parameters<ModelClient['findMany']>[0]['orderBy']
      : never;
    include?: ModelClient extends { findMany: (args: { include?: Record<string, unknown> }) => unknown }
      ? Parameters<ModelClient['findMany']>[0]['include']
      : never;
  }
) {
  const skip = (page - 1) * limit;
  const modelInstance = prisma[model] as ModelClient & {
    count: (args: { where?: Record<string, unknown> }) => Promise<number>;
    findMany: (args: {
      where?: Record<string, unknown>;
      orderBy?: Record<string, unknown>;
      include?: Record<string, unknown>;
      take?: number;
      skip?: number;
    }) => Promise<unknown[]>;
  };

  const [total, items] = await Promise.all([
    modelInstance.count({ where }),
    modelInstance.findMany({
      where,
      orderBy,
      include,
      take: limit,
      skip,
    }),
  ]);

  return {
    items,
    pagination: {
      total,
      pages: Math.ceil(total / limit),
      page,
      limit,
    },
  };
}

// Transaction wrapper
export async function withTransaction<T>(
  operation: (tx: Omit<PrismaClient, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends">) => Promise<T>
): Promise<T> {
  return await prisma.$transaction(async (tx) => {
    return await operation(tx);
  });
}

// Error response helper
export function handleDatabaseError(error: unknown) {
  if (error instanceof DatabaseError) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode }
    );
  }

  console.error('Unexpected error:', error);
  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  );
}