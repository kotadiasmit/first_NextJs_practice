import { NextResponse } from "next/server";
import userData from "@/utils/db";

function hasRequiredKeys(obj) {
  const expectedKeys = ["name", "email", "age", "id"];
  const objKeys = Object.keys(obj);

  return (
    objKeys.length === expectedKeys.length &&
    objKeys.every((key) => expectedKeys.includes(key))
  );
}

let users = userData;
export function GET() {
  return NextResponse.json(users, { status: 200 });
}

export async function POST(req) {
  const payload = await req.json();
  const { name, id, email, age } = payload;
  const isValid = hasRequiredKeys(payload);
  console.log(payload);
  if (isValid) {
    if (!id || !name || !email || !age) {
      return NextResponse.json(
        { result: "New user not Added", success: false },
        { status: 404 }
      );
    }
    users.push(payload);
    return NextResponse.json(
      { result: "New user Added", success: true, users },
      { status: 201 }
    );
  }
  return NextResponse.json(
    { result: "New user not Added", success: false },
    { status: 404 }
  );
}
