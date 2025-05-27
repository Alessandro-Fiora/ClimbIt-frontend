import { Link } from "react-router-dom";
import BookCard from "./BookCard";

export default function BookResults({ books, limit }) {
  const booksToShow = limit ? books.slice(0, limit) : books;
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5 ps-3 pe-3 ps-lg-0 pe-lg-0 mt-4 mb-4">
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
