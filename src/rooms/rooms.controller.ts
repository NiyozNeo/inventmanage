import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { Rooms } from './Rooms.entity';
import { RoomsService } from './Rooms.service';

@Controller('Rooms')
export class RoomsController {
  constructor(private readonly RoomsService: RoomsService) {}

  @Post()
  create(@Body() CreateRoomDto: CreateRoomDto): Promise<Rooms> {
    return this.RoomsService.create(CreateRoomDto);
  }

  @Get()
  findAll(): Promise<Rooms[]> {
    return this.RoomsService.findAll();
  }
}
