// Exporting main-view so it will be available for use by other components, modules, files
import { useEffect, useState } from 'react';
import BookCard from '../book-card/book-card';
import BookView from '../book-view/book-view';
import { LoginView } from '../login-view/login-view';

const MainView = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=star+wars')
      .then((response) => response.json())
      .then((data) => {
        console.log('books from api:', data);
        const booksFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0],
          };
        });
        setBooks(booksFromApi);
      });
  }, []);

  if (!user) {
    return <LoginView onLoggedIn={(user) => setUser(user)} />;
  }

  if (selectedBook) {
    return (
      <BookView
        book={selectedBook}
        onBackClick={() => {
          setSelectedBook(null);
        }}
      />
    );
  }

  if (books.length === 0) {
    return <div>The list is empty</div>;
  } else {
    return (
      <div>
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onBookClick={(newSelectedBook) => {
              setSelectedBook(newSelectedBook);
            }}
          />
        ))}
      </div>
    );
  }
};

export default MainView;
