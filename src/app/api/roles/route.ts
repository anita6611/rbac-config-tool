import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const roles = await prisma.role.findMany();
  return NextResponse.json(roles);
}

export async function POST(req: Request) {
  const { name } = await req.json();

  const role = await prisma.role.create({
    data: { name },
  });

  return NextResponse.json(role);
}
