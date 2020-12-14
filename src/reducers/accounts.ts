import { User } from '../services/apis';
import { ActionType } from './index';

export enum AccountType {
  Login, Logout, Signup
}

export const accountReducer = (state: any = {}, action: ActionType<AccountType>): { user: User } => {
  const { user } = action.payload || {};
  switch (action.type) {
    case AccountType.Login:
      return { user };
    case AccountType.Logout:
      return { user };
    case AccountType.Signup:
      return { user };
    default:
      return { user };
  }
};
