import { NavLink } from "react-router";


export function NavTop() {



  return (
    <nav className="w-full flex flex-1 sm:flex-row flex-col items-center justify-between bg-[#bb99ff] py-2 px-8">
      <h1 className="text-white text-2xl" >Cute Cafe</h1>
      <ul className="flex flex-row space-x-4 ">
        {resources.map(({ href, text }) => (
          <li key={href}>
            <NavLink
              className={({ isActive }) => (isActive ? `${linkStyle} bg-[#63a] text-white` : `${linkStyle} text-[#63a]`)}
              to={href}
              rel="noreferrer"
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

  const linkStyle = "group flex items-center gap-3 self-stretch p-3 leading-normal border-2 border-transparent hover:border-b-inherit ";


const resources = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/menu",
    text: "Menu",
  },
];