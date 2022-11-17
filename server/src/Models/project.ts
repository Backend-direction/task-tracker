import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}