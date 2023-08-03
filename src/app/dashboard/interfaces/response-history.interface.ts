import { User } from './user.interface';

export interface ResponseHistory {
  id: string;
  description: string;
  createdAt: string;
  user: User;
}
