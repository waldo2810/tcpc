"use server";

import { revalidateTag } from "next/cache";

export async function promoteUser(userId: string, checked: boolean) {
  const url = "http://localhost:3001/users/promote";
  await fetch(`${url}?id=${userId}`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify({ checked }),
  });
  revalidateTag("users");
}
