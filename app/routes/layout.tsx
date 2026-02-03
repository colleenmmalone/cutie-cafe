import { Outlet } from "react-router";
import { Footer } from "~/components/footer/footer";
import { NavTop } from "~/components/navtop/navtop";



export default function Layout() {
  return (
    <div className="flex-1 flex flex-col items-center min-h-0">
      <NavTop />
      <Outlet />
      <Footer />
    </div>

  );
}

