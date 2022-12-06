import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { StoryStatus } from '../Types/story';
import { Project } from './project';
import { Member } from './team-member';

@Entity('stories')
export class Story {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 256,
  })
  name: string;
  
  @Column({
    type: 'varchar',
    length: 2048,
  })
  description: string;
  
  @Column({
    type: "enum",
    enum: StoryStatus,
    default: StoryStatus.NEW,
  })
  status: StoryStatus;
  
  @Column({
    type: 'int',
  })
  estimate: number;

  @CreateDateColumn()
  created_at: Date
  
  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Project, (project) => project.stories)
  project: Project; 
  
  @ManyToOne(() => Member, (member) => member.story)
  member: Member;
}