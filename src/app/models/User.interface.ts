import {
  USER_ROLE
} from './UserRole';

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  role: USER_ROLE;
  enabled: boolean;
}
