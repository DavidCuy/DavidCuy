import { Skill } from './skill.interface';

export interface Knowledge {
  image: string;
  title: string;
  description: string;
  skills: Skill[];
}
