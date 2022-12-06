import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Story } from './story';
import { Team } from './team';
import { User } from './user';

@Entity('members')
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User

  @ManyToOne(() => Team, (team) => team.members)
  team: Team;

  @OneToMany(() => Story, (story) => story.member)
  story: Story[];
}