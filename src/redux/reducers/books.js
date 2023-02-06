import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: [], filter: '' },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setBooks, setFilter } = booksSlice.actions;
export default booksSlice.reducer;
