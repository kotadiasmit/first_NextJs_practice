import { NextResponse } from "next/server";
import userData from "@/utils/db";

function hasRequiredKeys(obj) {
  const expectedKeys = ["name", "email", "age", "id"];
  const objKeys = Object.keys(obj);

  return (
    objKeys.length <= expectedKeys.length &&
    objKeys.every((key) => expectedKeys.includes(key))
  );
}

let users = userData;
export function GET(_, content) {
  const { id } = content.params;
  console.log(id);
  const user = users.find((eachUser) => eachUser.id == id);
  if (!user) {
    return NextResponse.json(
      { result: "User Not Found", success: false },
      { status: 404 }
    );
  }
  return NextResponse.json(user, { status: 200 });
}

export async function PUT(req, content) {
  const payload = await req.json();
  console.log(content, payload);
  const { id } = content.params;
  const index = users.findIndex((eachUser) => eachUser.id == id);
  const user = users[index];
  const isValid = hasRequiredKeys(payload);
  if (index >= 0) {
    const { name, email, age } = payload;
    if ((!!name || !!email || !!age) && isValid) {
      users.splice(index, 1, { ...user, ...payload });
      return NextResponse.json(
        { result: "Data Updated", users, success: true },
        { status: 202 }
      );
    }
    return NextResponse.json(
      { result: "Provide Valid Details", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "User Not Found", success: false },
    { status: 404 }
  );
}

export function DELETE(_, content) {
  const { id } = content.params;
  const index = users.findIndex((eachUser) => eachUser.id == id);
  if (index < 0) {
    return NextResponse.json(
      { result: "User Not Found", success: false },
      { status: 404 }
    );
  }
  users.splice(index, 1);
  return NextResponse.json(
    { result: "User Deleted", success: true, users },
    { status: 200 }
  );
}
