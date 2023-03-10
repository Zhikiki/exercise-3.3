import { useSelector, useDispatch } from 'react-redux';
import { setBooks } from '../../redux/reducers/books';
import { setUser } from '../../redux/reducers/user';

import { useState, useEffect } from 'react';
import { BookCard } from '../book-card/book-card';
import { BooksList } from '../books-list/books-list';
import { BookView } from '../book-view/book-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const MainView = () => {
  const books = useSelector((state) => state.books.books);
  const user = useSelector((state) => state.user.user);
  console.log(user);
  // const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=star+wars')
      .then((response) => response.json())
      .then((data) => {
        const booksFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0],
          };
        });
        dispatch(setBooks(booksFromApi));
      });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Row>
        <NavigationBar />
      </Row>
      <Row className='justify-content-md-center'>
        <Routes>
          <Route
            path='/signup'
            element={
              <>
                {user ? (
                  <Navigate to='/' replace />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                {user ? (
                  <Navigate to='/' replace />
                ) : (
                  <Col md={5}>
                    <LoginView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path='/books/:bookId'
            element={
              <>
                {!user ? (
                  <Navigate to='/login' replace />
                ) : books.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <BookView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path='/'
            element={
              <>
                {!user ? (
                  <Navigate to='/login' replace />
                ) : <BooksList/>
                }
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
