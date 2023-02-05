import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: [] },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;
export default booksSlice.reducer;
