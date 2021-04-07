import { login, ParamsLogin, ParamsSignUp, signup } from '../apis';
import { UserType } from '../reducers/user';

export const loginAction = (data: ParamsLogin) => {
  return async (dispatch: any) => {
    const { user } = await login(data);
    dispatch({ type: UserType.Login, payload: user });
  }
};

export const signUpAction = (data: ParamsSignUp) => {
  return async (dispatch: any) => {
    const { user } = await signup(data);
    dispatch({ type: UserType.Signup, payload: user });
  }
};
