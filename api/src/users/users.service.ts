import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PG_CONNECTION } from 'src/db/db.module';
import { mapUserEntityToUser } from './mapper/user-to-entity';

@Injectable()
export class UsersService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  async getUsers(): Promise<User[]> {
    const res = await this.conn.query('SELECT * FROM users');
    const userEntityList = res.rows as UserEntity[];
    return userEntityList.map((e) => mapUserEntityToUser(e));
  }

  async getById(id: number) {
    const res = await this.conn.query('SELECT * FROM users WHERE id = $1', [
      id,
    ]);
    if (res.rows.length === 0) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }
    return res.rows[0];
  }

  async save(user: any) {
    const res = await this.conn.query(
      'INSERT INTO users (name, pfp, social_profile, promote, rating, last_login, created_at, user_role, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        user.name,
        user.pfp,
        user.socialProfile,
        user.promote,
        user.rating,
        user.lastLogin,
        new Date(),
        user.userRole,
        user.status,
      ],
    );
    return res.rows[0];
  }

  async update(id: number, user: any) {
    const res = await this.conn.query(
      'UPDATE users SET name = $1, pfp = $2, social_profile = $3, promote = $4, rating = $5, last_login = $6, created_at = $7, user_role = $8, status = $9 WHERE id = $10 RETURNING *',
      [
        user.name,
        user.pfp,
        user.socialProfile,
        user.promote,
        user.rating,
        user.lastLogin,
        new Date(),
        user.userRole,
        user.status,
        id,
      ],
    );
    if (res.rows.length === 0) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }
    return res.rows[0];
  }

  async delete(id: number) {
    const res = await this.conn.query(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [id],
    );
    if (res.rows.length === 0) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }
    return res.rows[0];
  }
}
