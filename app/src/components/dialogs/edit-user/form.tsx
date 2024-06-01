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
import { User } from "@/components/users-table/columns";
import { SubmitHandler, useForm } from "react-hook-form";

export type EditUserRequest = {
  name: string;
  userRole: string;
  socialProfile: string;
};

export default function EditUserForm({ user }: { user: User }) {
  const form = useForm<EditUserRequest>({
    defaultValues: {
      name: user.profile.name,
      userRole: user.userRole,
      socialProfile: user.socialProfile,
    },
  });

  const onSubmit: SubmitHandler<EditUserRequest> = async (data) => {
    const res = await fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        pfp: "https://vercel.com/api/www/avatar/FBeKboUvbe5zD2X4m4yoeKbs?&s=64",
        status: "Inactive",
      }),
    });
    if (!res.ok) {
      console.log("ERROR");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
