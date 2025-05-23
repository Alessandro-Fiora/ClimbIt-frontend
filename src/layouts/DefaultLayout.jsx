import Header from "./partials/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
