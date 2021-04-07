# How to use React Redux

[See this article for more information.](https://levelup.gitconnected.com/redux-hooks-with-typescript-4fba08f160ad)

## 1 Create Store

```typescript
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducter';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReducer, devToolsEnhancer({}));
export default store;
```

## 2 Provider

```typescript
import { Provider } from 'react-redux'
import store from './redux/store/store'

...
<Provider store={store}>
    <App/>
</Provider>
...
```

## 3 Reducer

```typescript
import { NameActions } from '../actions/nameActions';

type NameState = {
  name: string;
}

const initialState: NameState = {
  name: '',
}

const NameReducer = (state: NameState = initialState, action: NameActions) => {
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state;
    }
}
export default NameReducer;
```

```typescript
import { combineReducers } from 'redux';
import countReducer from './countReducer';
import nameReducer from './nameReducer';

const rootReducer = combineReducers({
    count: countReducer,
    name: nameReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
```

## 4 Action

```typescript
export interface IIncrementCountAction {
    readonly type: 'INCREMENT';
}
export interface IDecrementCountAction {
    readonly type: 'DECREMENT';
}
export type CountActions =
| IIncrementCountAction
| IDecrementCountAction
```

## 5 Usage

```tsx
import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './redux/reducers/rootReducter';
import { CountActions } from './redux/actions/countActions';
import { NameActions } from './redux/actions/nameActions';

const App = () => {
    const { count } = useSelector((state: AppState) => state.count);
    const { name } = useSelector((state: AppState) => state.name);
    const countDispatch = useDispatch<Dispatch<CountActions>>();
    const nameDispatch = useDispatch<Dispatch<NameActions>>();
    const handleIncrement = () => {
        countDispatch({type: 'INCREMENT'});
    }
    const handleDecrement = () => {
        countDispatch({type: 'DECREMENT'});
    }
    const handleSetName =
        (e: React.ChangeEvent<HTMLInputElement>) => {
        nameDispatch({type: 'SET_NAME', payload: e.target.value});
    }
    return (
        <div>
            <div>
                <button onClick={handleIncrement}>+</button>
                {count}
                <button onClick={handleDecrement}>-</button>
            </div>
            <div>
                <input type="text" onChange={handleSetName}/>
                {name}
            </div>
        </div>
    );
}

export default App;
```
