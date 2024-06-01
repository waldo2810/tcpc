"use client";

import { promoteUser } from "@/app/actions/promote-user";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export const UserPromote = ({ user }: { user: User }) => {
  const [isChecked, setChecked] = useState<boolean>(user.promote);

  useEffect(() => {
    setChecked(user.promote);
  }, [user.promote, isChecked]);

  const handleSwitch = async (checked: boolean): Promise<void> => {
    setChecked(checked);
    promoteUser(user.id, checked);
  };

  return <Switch checked={isChecked} onCheckedChange={handleSwitch} />;
};
