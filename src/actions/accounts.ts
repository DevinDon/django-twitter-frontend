import { AccountType } from '../reducers/accounts';
import { login, ParamsLogin, ParamsSignUp, signup } from '../services/apis';

export function loginAction(data: ParamsLogin) {
  return async (dispatch: any) => {
    const { user } = await login(data);
    dispatch({ type: AccountType.Login, payload: user });
  }
}

export function signUpAction(data: ParamsSignUp) {
  return async (dispatch: any) => {
    const { user } = await signup(data);
    dispatch({ type: AccountType.Signup, payload: user });
  }
}
