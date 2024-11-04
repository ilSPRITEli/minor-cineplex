import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(request: any) {
  try {
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(password);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return Response.json(user, { status: 201 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }

}
