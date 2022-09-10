import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-Users.dto';
import { Users } from './Users.entity';
import { UsersService } from './Users.service';

@Controller('Userss')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post()
  create(@Body() createUsersDto: CreateUsersDto): Promise<Users> {
    return this.UsersService.create(createUsersDto);
  }

  @Get()
  findAll(): Promise<Users[]> {
    return this.UsersService.findAll();
  }
}
