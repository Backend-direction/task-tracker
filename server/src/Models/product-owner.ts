import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user';

@Entity('product_owners')
export class ProductOwner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  capacity: number; 
  
  @OneToOne(() => User)
  @JoinColumn()
  user: User
}