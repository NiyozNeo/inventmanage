import { Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-Users.dto';
import { Users } from './Users.entity';
import { CONNECTION } from '../tenancy/tenancy.symbols';

@Injectable()
export class UsersService {
  private readonly UserssRepository: Repository<Users>;

  constructor(
    @Inject(CONNECTION) connection: Connection,
  ) {    
    this.UserssRepository = connection.getRepository(Users);
  }

  async create(createUsersDto: CreateUsersDto): Promise<Users> {
    const users = new Users();
    users.name = createUsersDto.name;

    return await this.UserssRepository.save(users);
  }

  async findAll(): Promise<Users[]> {
    return this.UserssRepository.find();
  }
}
