import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Main = () => {
  return (
    <>
    <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Main;