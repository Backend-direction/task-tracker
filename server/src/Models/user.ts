import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;
  
  @Column({
    type: 'varchar',
    length: 50,
  })
  surname: string;
  
  @Column({
    type: 'varchar',
    length: 128,
    unique: true,
  })
  email: string;
  
  @Column({
    type: 'boolean',
  })
  status: string;

  @CreateDateColumn()
  created_at: Date
  
  @UpdateDateColumn()
  updated_at: Date
}