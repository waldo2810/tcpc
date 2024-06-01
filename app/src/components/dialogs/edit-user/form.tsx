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
  rating: string;
  status: "Active" | "Inactive";
};

export default function EditUserForm({
  user,
  handleSubmit,
}: {
  user: User;
  handleSubmit: any;
}) {
  const form = useForm<EditUserRequest>({
    defaultValues: {
      name: user.profile.name,
      userRole: user.userRole,
      socialProfile: user.socialProfile,
      status: user.status,
      rating: user.rating.toString(),
    },
  });

  const onSubmit: SubmitHandler<EditUserRequest> = async (data) =>
    handleSubmit(user.id, data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your user name..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
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
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Active">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full" />
                      <p>Active</p>
                    </div>
                  </SelectItem>
                  <SelectItem value="Inactive">
                    {" "}
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-red-500 rounded-full" />
                      <p>Inactive</p>
                    </div>
                  </SelectItem>
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
              <FormLabel>A social media link</FormLabel>
              <FormControl>
                <Input
                  placeholder="LinkedIn, Twitter, Instagram..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Input placeholder="5.0, 4.5, 4.0..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
