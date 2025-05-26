import { Link } from "react-router-dom";
import BookCard from "./BookCard";

export default function BookResults({ books, limit }) {
  const booksToShow = limit ? books.slice(0, limit) : books;
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5">
        {booksToShow.map((book) => (
          <div className="col" key={book.id}>
            <Link to={"/books/" + book.id}>
              <BookCard book={book} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
