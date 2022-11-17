import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
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
}