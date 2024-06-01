"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SubmitHandler, useForm } from "react-hook-form";

export type CreateUserRequest = {
  name: string;
  userRole?: string;
  socialProfile: string;
};

export default function CreateUserForm() {
  const form = useForm<CreateUserRequest>();

  const onSubmit: SubmitHandler<CreateUserRequest> = async (data) => {
    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...data, pfp: 'https://vercel.com/api/www/avatar/FBeKboUvbe5zD2X4m4yoeKbs?&s=64'}),
    });
    if (!res.ok) {
      console.log("ERROR");
    }
    const info = await res.json();
    console.log(info);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name*</FormLabel>
              <FormControl>
                <Input placeholder="Your user name..." {...field} required />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Administrator">Administrator</SelectItem>
                  <SelectItem value="Moderator">Moderator</SelectItem>
                  <SelectItem value="Viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="socialProfile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>A social media link*</FormLabel>
              <FormControl>
                <Input
                  placeholder="LinkedIn, Twitter, Instagram..."
                  {...field}
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
