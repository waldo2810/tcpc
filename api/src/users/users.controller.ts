import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    try {
      return await this.userService.getById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  async createUser(@Body() user: any): Promise<User> {
    return await this.userService.save(user);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: any): Promise<User> {
    return await this.userService.update(id, user);
    // try {
    //   return await this.userService.update(id, user);
    // } catch (error) {
    //   throw new NotFoundException(error.message);
    // }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<User> {
    try {
      return await this.userService.delete(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
