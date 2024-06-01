"use server";

import { API_URL } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function deleteUser(userId: string) {
  await fetch(`${API_URL}/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag("users");
}
