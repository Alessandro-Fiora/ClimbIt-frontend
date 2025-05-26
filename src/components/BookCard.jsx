import Pill from "./Pill";

export default function BookCard({ book }) {
  return (
    <div className="card book-card h-100">
      <span className="pill-scopri">Scopri</span>
      <img src={book.immagine} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h2 className="h5 fw-bold">{book.titolo}</h2>
          <h3 className="h6 fw-light">{book.sottotitolo}</h3>
        </div>
        <div>
          <p className="fw-bold">€ {book.prezzo},00</p>
          <div>
            {book.categories &&
              book.categories.map((cat) => (
                <Pill isCategory={true} text={cat.nome} key={cat.id} />
              ))}
            <Pill
              isCategory={false}
              text={book.region.nome}
              key={book.region.id}
            />
          </div>
        </div>
      </div>
      <div className="card-red-bar rounded-3"></div>
    </div>
  );
}
