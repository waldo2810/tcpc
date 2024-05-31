/**
 *
 * @param entity User Entity
 * @returns a User element
 */
export function mapUserEntityToUser(entity: UserEntity): User {
  return {
    id: entity.id,
    profile: {
      name: entity.name,
      pfp: entity.pfp,
    },
    userRole: entity.user_role,
    status: entity.status,
    socialProfile: entity.social_profile,
    promote: entity.promote,
    rating: entity.rating,
    lastLogin: entity.last_login,
  };
}
