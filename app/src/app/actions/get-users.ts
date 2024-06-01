"use server";

import { API_URL } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function getUsers(): Promise<User[]> {
  const url = `${API_URL}/users`;
  const res = await fetch(`${url}`, {
    next: { tags: ["users"] },
  });
  const data = await res.json();
  revalidateTag("users");
  return data;
}
