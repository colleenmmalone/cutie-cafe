import { MenuMap } from "~/components/menumap/menumap";
import type { Route } from "./+types/menu";
import { PageTitle } from "~/components/pagetitle/pagetitle";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Cute Cafe Menu" },
    { name: "description", content: "Cute Cafe Menu" },
  ];
}

export default function Menu() {
  return (
    <main className="flex items-center justify-center gap-16 pb-16">
      <div className="flex-1 flex flex-col items-center gap-6 min-h-0">
        <header className="flex flex-col items-center">
          <div className="w-[500px] max-w-[100vw] p-4 pt-16">
            <PageTitle text="Menu" />
          </div>
        </header>

        <p>Come into the shop for a delicious treat!</p>

        <div className="max-w-[80%] sm:max-w-[100%] w-full space-y-6 px-4">
          <MenuMap />
        </div>


      </div>
    </main>
  );
}

