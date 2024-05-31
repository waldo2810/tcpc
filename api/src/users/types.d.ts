type UserEntity = {
  id: number;
  name: string;
  pfp: string;
  social_profile: string;
  promote: boolean;
  rating: number;
  last_login: Date;
  created_at: Date;
  user_role: string;
  status: string;
};

type User = {
  id: number;
  profile: {
    name: string;
    pfp: string;
  };
  userRole: string;
  status: string;
  socialProfile: string;
  promote: boolean;
  rating: number;
  lastLogin: Date;
};
