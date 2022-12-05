import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Project } from './project';
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

  @OneToMany(() => Project, (project) => project.productOwner)
  projects: Project[];
}