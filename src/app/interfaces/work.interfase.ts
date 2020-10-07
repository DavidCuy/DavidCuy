import { WorkMade } from './workmade.interface';

export interface Work {
  imageUrl: string;
  title: string;
  website: string;
  showWeb: boolean;
  workMade: WorkMade;
}
