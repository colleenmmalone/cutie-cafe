import { Link } from "react-router";
import { Hero } from "./hero";
import { Card } from "~/components/card/card";
import { BtnSeeMenu } from "~/components/btn-seemenu/btn-seemenu";

export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center pt-0 mt-0 pb-4">

      <Hero />

      <Card >
        <p>We can't wait to meet you!</p>
        <BtnSeeMenu />
      </Card>

    </main >
  );
}
