import { Skill } from './skill.interfase';

export interface Knowledge {
  image: string;
  title: string;
  description: string;
  skills: Skill[];
}
