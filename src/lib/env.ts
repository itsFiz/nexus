// lib/env.ts
export const env = {
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET || 'your-development-secret',
    NODE_ENV: process.env.NODE_ENV || 'development',
  } as const;
  
  // Validate environment variables
  const required = ['DATABASE_URL', 'JWT_SECRET'] as const;
  
  for (const name of required) {
    if (!env[name]) {
      throw new Error(`Environment variable ${name} is missing`);
    }
  }