import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Pool } from 'pg';
import { DatabaseService } from 'src/db/db.service';
import { userQueries } from './helpers/queries';
import { mapUserEntityToUser } from './mapper/user-to-entity';

@Injectable()
export class UsersService {
  private pool: Pool;

  constructor(private databaseService: DatabaseService) {
    this.pool = this.databaseService.getPool();
  }
  async getUsers(): Promise<User[]> {
    const res = await this.pool.query(userQueries.selectAll);
    const userEntityList = res.rows as UserEntity[];
    return userEntityList.map((e) => mapUserEntityToUser(e));
  }

  async getById(id: number): Promise<User> {
    const res = await this.pool.query(userQueries.selectById, [id]);
    if (res.rows.length === 0) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }
    return mapUserEntityToUser(res.rows[0]);
  }

  async save(user: any): Promise<User> {
    const res = await this.pool.query(userQueries.save, [
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
    const res = await this.pool.query(userQueries.update, [
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
    const res = await this.pool.query(userQueries.delete, [id]);
    if (res.rows.length === 0) {
      throw new BadRequestException(`User with id ${id} not found.`);
    }
    return mapUserEntityToUser(res.rows[0]);
  }

  async deleteAll(): Promise<void> {
    await this.pool.query(userQueries.deleteAll);
  }

  async promoteUser(id: number, checked: boolean): Promise<void> {
    await this.pool.query(userQueries.promote, [checked, id]);
  }
}
