import Image from "next/image";

type UserProfileProps = {
  profile: UserProfile;
};

export const UserProfile = ({ profile }: UserProfileProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        width={32}
        height={32}
        src={"/avatar.png"}
        alt="avatar"
        className="rounded-full"
      />
      <p className="font-medium">{profile.name}</p>
    </div>
  );
};
