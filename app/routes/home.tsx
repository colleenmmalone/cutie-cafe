import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cute Cafe" },
    { name: "description", content: "Where caffeine meets cute!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
