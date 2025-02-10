import { prisma } from "@/lib/db";

export async function GET() {
  const evolution = await prisma.companyEvolution.findMany({
    orderBy: { year: 'asc' }
  });
  return Response.json(evolution);
}


export async function POST(req: Request) {
  const data = await req.json();
  const evolution = await prisma.companyEvolution.create({
    data
  });
  return Response.json(evolution);
}

export async function PUT(
  req: Request,
  { params }: { params: { year: string } }
) {
  const data = await req.json();
  const evolution = await prisma.companyEvolution.update({
    where: { year: parseInt(params.year) },
    data
  });
  return Response.json(evolution);
}
