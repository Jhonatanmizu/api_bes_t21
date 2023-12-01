import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async fetchAllUsers() {
    return await this.userService.findAll();
  }

  @Post()
  public async postNewUser() {
    return await this.userService.storeNewUser();
  }
}
