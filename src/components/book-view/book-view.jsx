import './book-view.scss';

export const BookView = ({ book, onBackClick }) => {
  return (
    <div>
      <div>
        <img className='w-100' src={book.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{book.title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{book.author}</span>
      </div>
      <button className='back-button' onClick={onBackClick}>
        Back
      </button>
    </div>
  );
};
