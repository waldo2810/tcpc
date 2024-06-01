"use server";

import { revalidateTag } from "next/cache";

export async function deleteUser(userId: string) {
  await fetch(`http://localhost:3001/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag("users");
}
