import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Rooms } from '../rooms/Rooms.entity';

@Entity({ name: 'Products' })
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column({
    name: 'created_at',
    type: 'timestamp without time zone',
    default: new Date(),
  })
  cameDate: Date;
  @Column({ default: 0, type: 'real' })
  price: number;
  @Column({ default: 0, type: 'real' })
  soldPrice: number;
  @Column({
    name: 'sold_at',
    type: 'timestamp without time zone',
  })
  soldDate: Date;
  @ManyToOne(() => Rooms, (r) => r.product, { onDelete: 'SET NULL' })
  roomId: Rooms;
}
