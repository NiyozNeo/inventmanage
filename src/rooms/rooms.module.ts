import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rooms } from './Rooms.entity';
import { RoomsController } from './Rooms.controller';
import { RoomsService } from './Rooms.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rooms])],
  providers: [RoomsService],
  controllers: [RoomsController],
})
export class RoomsModule {}
