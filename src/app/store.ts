import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import token from '../features/slices/tokenSlice'
import user from '../features/slices/tokenSlice'
import UserSlice from "../features/slices/userSlice";

export const store = configureStore({
  reducer: {
    user:UserSlice,token
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
