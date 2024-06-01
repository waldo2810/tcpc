"use server";

import { revalidateTag } from "next/cache";

export async function deleteAll() {
  const url = "http://localhost:3001/users";
  await fetch(url, { method: "DELETE" });
  revalidateTag("users");
}
