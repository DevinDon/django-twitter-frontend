import { User } from '../services/apis';
import { getRandomGenerator } from '../utils';
import { ActionType } from './index';

export enum AccountType {
  Login, Logout, Signup
}

const INITIAL_STATE: User = {
  avatar: getRandomGenerator(),
  email: 'anonymous@jiuzhang.com',
  username: 'anonymous',
};

export const accountReducer = (state: User = INITIAL_STATE, action: ActionType<AccountType>): User => {
  const user = action.payload || state;
  switch (action.type) {
    case AccountType.Login:
      return user;
    case AccountType.Logout:
      return user;
    case AccountType.Signup:
      return user;
    default:
      return user;
  }
};
