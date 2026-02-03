import { MenuCard } from "./menucard";

export function MenuMap() {
  return (
    <div className="w-full items-center justify-center">

      <ul className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
        {/* menu item  */}
        {resources.map((m, i) => (
          <li key={i}>
            <MenuCard props={m} />
          </li>
        ))}
      </ul>

    </div>
  );
}

const resources = [
  { 
    text: "Espresso",
    price: 1.99 ,
    icon: <>&#9731;</>,
  },
  { 
    text: "Latte" ,
    price: 5.99 ,
    icon: <>&#9734;</>,
  },
  { 
    text: "Cappucino" ,
    price: 3.99 ,
    icon: <>&#9812;</>,
  },
  { 
    text: "Chai" ,
    price: 5.99 ,
    icon: <>&#9749;</>,
  },
  { 
    text: "Hot Tea" ,
    price: 1.50 ,
    icon: <>&#x2696;</>,
  },
  { 
    text: "Iced Tea" ,
    price: 2.99 ,
    icon: <>&#9875;</>,
  },
  { 
    text: "Hot Chocolate" ,
    price: 4.45 ,
    icon: <>&#9832;</>,
  },
  { 
    text: "Lemonade" ,
    price: 3.99 ,
    icon: <>&#9889;</>,
  },
];