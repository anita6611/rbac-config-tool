import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const permissions = await prisma.permission.findMany();
  return NextResponse.json(permissions);
}

export async function POST(req: Request) {
  const { name, description } = await req.json();

  const permission = await prisma.permission.create({
    data: { name, description },
  });

  return NextResponse.json(permission);
}
