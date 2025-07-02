export default function AboutPage() {
  return (
    <>
      <section className="jumbo">
        <div className="img-wrapper">
          <img
            id="about-jumbo-img"
            className="img-fluid"
            src="/img/about-us-jumbo.jpg"
            alt=""
          />
        </div>
      </section>
      <div className="container pt-5">
        <section className="about-us">
          <h1 className="fw-bold">Chi siamo</h1>
          <div className="d-flex justify-content-center align-items-center p-5">
            <p className="h5 w-50">
              CLIMBIT è un <strong>progetto didattico</strong> che riproduce un
              editore che si occupa di pubblicare guide di{" "}
              <strong>alpinismo e sport outdoor</strong> in genere.
            </p>
          </div>
        </section>
        <section className="p-5">
          <h2 className="h1 fw-bold mb-4">Guide outdoor</h2>
          <div className="jumbo-img-wrapper">
            <img
              id="about-jumbo-img"
              className="img-fluid"
              src="/img/about_us_img.jpg"
              alt=""
            />
          </div>
          <div className="d-flex justify-content-center align-items-center p-5">
            <p className="h5 w-50 pt-5 mb-5">
              La collana <strong>GUIDE OUTDOOR</strong> è la principale collana
              europea di guide alle località turistiche e ai percorsi sportivi
              outdoor. Conta circa <strong>300 titoli</strong> che descrivono
              percorsi di{" "}
              <strong>
                arrampicata su roccia, ghiaccio, alpinismo, corsa o camminate in
                montagna, mountanin bike, sci alpinismo e fuori pista
              </strong>
              . Essa costituisce non solo{" "}
              <strong>la più grande collana europea</strong> di questo genere in
              termini di volumi, pagine e territorio coperto, ma anche
              relativamente alla sua diffusione nel mondo. Le guide sono
              pubblicate in esclusivi volumi per le diverse lingue:
              prevalentemente in italiano, tedesco e inglese, ma dove necessario
              anche in altre lingue come francese o portoghese. Il rapporto con
              il territorio è una chiave del successo di questa collana e uno
              dei punti fondamentali del nostro operare: non solo esso è
              fondamentale per la buona riuscita dei nostri libri (vedi il
              progetto km ZERO), ma può trasformare le nostre guide in un
              importante motore di turismo sportivo outdoor, lento e
              sostenibile.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
