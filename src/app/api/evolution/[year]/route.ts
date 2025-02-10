import { getServerSession } from 'next-auth/next';
import { evolutionSchema } from '@/lib/validators/evolution';
import { prisma } from '@/lib/db';
import { authOptions } from '@/lib/auth';

export async function PUT(
  req: Request,
  { params }: { params: { year: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    // Check if user is authenticated and has permission
    if (!session || !['FOUNDER', 'EXECUTIVE'].includes(session.user.role)) {
      return new Response('Unauthorized', { status: 401 });
    }

    const data = await req.json();
    
    // Validate data
    const validated = evolutionSchema.parse(data);

    // Log the change
    await prisma.activity.create({
      data: {
        userId: session.user.id,
        type: 'EVOLUTION_UPDATE',
        description: `Updated evolution data for year ${params.year}`,
        metadata: { year: params.year, changes: data }
      }
    });

    const evolution = await prisma.companyEvolution.update({
      where: { year: parseInt(params.year) },
      data: validated
    });

    return Response.json(evolution);
  } catch (error) {
    console.error(error);
    return new Response('Failed to update evolution data', { status: 500 });
  }
} 