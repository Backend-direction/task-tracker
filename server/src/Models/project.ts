import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ProductOwner } from './product-owner';
import { Team } from './team';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
  })
  name: string;
  
  @Column({
    type: 'varchar',
    length: 250,
  })
  description: string;
  
  @Column({
    type: 'varchar',
    length: 250,
  })
  image: string;
  
  @Column({
    type: 'int',
  })
  rate: number;

  @CreateDateColumn()
  created_at: Date
  
  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => ProductOwner, (productOwner) => productOwner.projects)
  productOwner: ProductOwner;

  @OneToOne(() => Team)
  @JoinColumn()
  team: Team
}