import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Products } from '../products/Products.entity';
import { Users } from '../users/Users.entity';

@Entity({ name: 'Rooms' })
export class Rooms {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;
  @ManyToOne(() => Users, (u) => u.rooms, { onDelete: 'SET NULL' })
  user: Users;
  @OneToMany(() => Products, (p) => p.roomId, { onDelete: 'SET NULL' })
  product: Products;
}
