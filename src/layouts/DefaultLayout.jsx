import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
}
