import { Link } from "react-router";

export function BtnSeeMenu() {
  return (
    <Link to="/menu">
      <button className="rounded-xl bg-[#880088] text-white py-4 px-6">
        See the Menu
      </button>
    </Link>
  );
}

