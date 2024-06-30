import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from './reducers/themeSlice';
import counterReducer from './reducers/counterSlice';
import { goodsApi } from './api/goodsApi';
import { authApi } from './api/authApi';

const rootReducer = combineReducers({
	// redux
	theme: themeReducer,
	counter: counterReducer,
	// rtk-query endpoints
	[goodsApi.reducerPath]: goodsApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(authApi.middleware, goodsApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
