import Header from "./partials/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
