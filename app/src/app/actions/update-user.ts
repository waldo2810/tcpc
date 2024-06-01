"use server";

import { EditUserRequest } from "@/components/dialogs/edit-user/form";
import { API_URL } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function updateUser(userId: number, data: EditUserRequest) {
  await fetch(`${API_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      pfp: "https://vercel.com/api/www/avatar/FBeKboUvbe5zD2X4m4yoeKbs?&s=64",
    }),
  });
  revalidateTag("users");
}
