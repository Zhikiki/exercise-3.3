import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './reducers/books';
export const store = configureStore({
  reducer: { books: booksReducer },
});
