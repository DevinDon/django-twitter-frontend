import { User } from '../apis';
import { getRandomAvatar } from '../utils';
import { ActionType } from './index';

export enum UserType {
  Login, Logout, Signup,
}

const INITIAL_STATE: User = {
  avatar: '',
  email: 'anonymous@jiuzhang.com',
  username: 'anonymous',
};

getRandomAvatar()
  .then(avatar => INITIAL_STATE.avatar = avatar);

export const userReducer = (state: User = INITIAL_STATE, action: ActionType<UserType>): User => {
  const user = action.payload || state;
  switch (action.type) {
    case UserType.Login:
      return user;
    case UserType.Logout:
      return user;
    case UserType.Signup:
      return user;
    default:
      return user;
  }
};
