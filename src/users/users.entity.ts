// import { AbstractEntity } from '../../abstract.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rooms } from '../rooms/Rooms.entity';

@Entity({ name: 'Users' })
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @OneToMany(()=> Rooms , (room)=> room.user, {onDelete: "SET NULL"})
  rooms: Users
}
