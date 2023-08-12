import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import invoicesReducer from './invoice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        invoice: invoicesReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
