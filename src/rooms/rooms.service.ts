import { Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-Room.dto';
import { Rooms } from './Rooms.entity';
import { CONNECTION } from '../tenancy/tenancy.symbols';

@Injectable()
export class RoomsService {
  private readonly RoomsRepository: Repository<Rooms>;

  constructor(
    @Inject(CONNECTION) connection: Connection,
  ) {    
    this.RoomsRepository = connection.getRepository(Rooms);
  }

  async create(createRoomDto: CreateRoomDto): Promise<Rooms> {
    const room = new Rooms();
    room.name = createRoomDto.name;

    return await this.RoomsRepository.save(room);
  }

  async findAll(): Promise<Rooms[]> {
    return this.RoomsRepository.find();
  }
}
