import {
  Body,
  Controller,
  Delete,
  Get,
  BadRequestException,
  Param,
  Post,
  Put,
  Query,
  NotFoundException,
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

  @Put('promote')
  async promoteUser(
    @Query('id') id: number,
    @Body() payload: { checked: boolean },
  ): Promise<void> {
    try {
      await this.userService.promoteUser(id, payload.checked);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: any): Promise<User> {
    try {
      return await this.userService.update(id, user);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete()
  async deleteAll(): Promise<void> {
    try {
      await this.userService.deleteAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<User> {
    try {
      return await this.userService.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
