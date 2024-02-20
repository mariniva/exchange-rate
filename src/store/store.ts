import { combineReducers, configureStore } from '@reduxjs/toolkit';
import elementReducer from './reducers/ElementSlice';

const rootReducer = combineReducers({
  elementReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>; //получили тип для state из reducer
export type AppStore = ReturnType<typeof setupStore>; // получили тип store
export type AppDispatch = AppStore['dispatch']; // получили тип dispatch
