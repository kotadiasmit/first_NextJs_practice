import { NextResponse } from "next/server";
import userData from "@/db";

let users = userData;
export function GET() {
  return NextResponse.json(users, { status: 200 });
}

export async function POST(req) {
  const payload = await req.json();
  const { name, id, email, age } = payload;
  console.log(payload);
  if (!id || !name || !email || !age) {
    return NextResponse.json(
      { result: "New user not Added", success: false },
      { status: 404 }
    );
  }
  users.push(payload);
  return NextResponse.json(
    { result: "New user Added", success: true, users },
    { status: 200 }
  );
}
