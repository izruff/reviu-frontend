import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>This is the layout element.</div>
      <Outlet />
    </>
  );
};

export default Layout;
