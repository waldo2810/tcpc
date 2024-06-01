"use server";

import { API_URL } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function promoteUser(userId: string, checked: boolean) {
  const url = `${API_URL}/users/promote`;
  await fetch(`${url}?id=${userId}`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify({ checked }),
  });
  revalidateTag("users");
}
