interface Skill {
  name: string;
  description: string;
}

export interface WorkMade {
  title: string;
  description: string;
  details: Skill[];
}
