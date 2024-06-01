type UserProfile = {
  name: string;
  pfp: string;
};

type UserRole = "Administrator" | "Viewer" | "Moderator";

type SocialProfile =
  | "Facebook"
  | "Github"
  | "LinkedIn"
  | "Twitter"
  | "Website"
  | "YouTube"
  | string;

type UserStatus = "Active" | "Inactive";

type User = {
  id: string;
  profile: UserProfile;
  userRole: UserRole;
  status: UserStatus;
  socialProfile: SocialProfile;
  promote: boolean;
  rating: number;
  lastLogin: string;
};
