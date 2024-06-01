"use server";

import { CreateUserRequest } from "@/components/dialogs/create-user/form";
import { API_URL } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function createUser(data: CreateUserRequest) {
  await fetch(API_URL, {
    method: "POST",
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
