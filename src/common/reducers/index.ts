import { combineReducers } from 'redux';
import { userReducer } from './user';

export interface ActionType<T, P = any> {
  type: T;
  payload: P;
}

export type AppState = ReturnType<typeof rootReducers>;

export const rootReducers = combineReducers({ userReducer });
