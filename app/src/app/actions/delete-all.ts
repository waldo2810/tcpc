"use server";

import { API_URL } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function deleteAll() {
  const url = API_URL;
  await fetch(url, { method: "DELETE" });
  revalidateTag("users");
}
