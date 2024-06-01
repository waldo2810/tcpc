"use server";

import { revalidateTag } from "next/cache";

export async function getUsers(): Promise<User[]> {
  const url = "http://localhost:3001/users";
  const res = await fetch(`${url}`, {
    next: { tags: ["users"] },
  });
  const data = await res.json();
  revalidateTag("users");
  return data;
}
