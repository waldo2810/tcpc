import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PG_CONNECTION } from 'src/db/db.module';
import { mapUserEntityToUser } from './mapper/user-to-entity';
import { userQueries } from './helpers/queries';

@Injectable()
export class UsersService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  async getUsers(): Promise<User[]> {
    const res = await this.conn.query(userQueries.selectAll);
    const userEntityList = res.rows as UserEntity[];
    return userEntityList.map((e) => mapUserEntityToUser(e));
  }

  async getById(id: number): Promise<User> {
    const res = await this.conn.query(userQueries.selectById, [id]);
    if (res.rows.length === 0) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }
    return mapUserEntityToUser(res.rows[0]);
  }

  async save(user: any): Promise<User> {
    const res = await this.conn.query(userQueries.save, [
      user.name,
      user.pfp,
      user.socialProfile,
      false,
      0,
      new Date(),
      new Date(),
      user.userRole,
      'Active',
    ]);
    return mapUserEntityToUser(res.rows[0]);
  }

  async update(id: number, user: any): Promise<User> {
    const res = await this.conn.query(userQueries.update, [
      user.name,
      user.pfp,
      user.socialProfile,
      user.userRole,
      user.status,
      user.rating,
      id,
    ]);
    if (res.rows.length === 0) {
      throw new BadRequestException(`User with id ${id} not found.`);
    }
    return mapUserEntityToUser(res.rows[0]);
  }

  async delete(id: number): Promise<User> {
    const res = await this.conn.query(userQueries.delete, [id]);
    if (res.rows.length === 0) {
      throw new BadRequestException(`User with id ${id} not found.`);
    }
    return mapUserEntityToUser(res.rows[0]);
  }

  async promoteUser(id: number, checked: boolean): Promise<void> {
    await this.conn.query(userQueries.promote, [checked, id]);
  }
}
