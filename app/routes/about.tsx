import type { Route } from "./+types/about";
import { PageTitle } from "~/components/pagetitle/pagetitle";
import { Card } from "~/components/card/card";
import barista from '../assets/barista.jpg';
import { BtnSeeMenu } from "~/components/btn-seemenu/btn-seemenu";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About Cute Cafe" },
    { name: "description", content: "About" },
  ];
}

export default function About() {
  return (
    <main className="flex items-center justify-center gap-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-6 min-h-0">
        <header className="flex flex-col items-center">
          <div className="w-[500px] max-w-[100vw] px-4 pt-16">
            <PageTitle text="About Cute Cafe" />
          </div>
        </header>
        <div className="max-w-[80%]">
          <Card>

            <h3 className="w-full text-left text-3xl px-10"> Meet our Barista!</h3>
            <img src={barista} alt={'picture of barista employee of the month'} className="max-w-[70%] rounded-xl" />


            <p className="w-full text-left text-lg px-10">
              Hairy is our top-notch always-friendly barista! With over 8 years of experience, he has traveled the globe, searching for the highest quality, best-tasting coffee to bring home to you. No wonder he is employee of the month every month!
              <br /><br />
              Hurry in to our shop to experience the world's best coffee for yourself!
            </p>

            <BtnSeeMenu />
          </Card>



        </div>

      </div>
    </main>
  );
}

