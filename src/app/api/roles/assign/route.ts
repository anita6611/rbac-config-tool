import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { roleId, permissionIds } = await req.json();

  await prisma.rolePermission.deleteMany({
    where: { roleId },
  });

  await prisma.rolePermission.createMany({
    data: permissionIds.map((permissionId: string) => ({
      roleId,
      permissionId,
    })),
  });

  return NextResponse.json({ success: true });
}
