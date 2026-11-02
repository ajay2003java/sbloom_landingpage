import type { MetaFunction } from "react-router";
import { HomePage } from "../pages/HomePage";

export const meta: MetaFunction = () => {
  return [
    { title: "sBLOOM | We Help You Get More Revenue" },
    { name: "description", content: "sBLOOM delivers qualified paying customers in person and online through Field Sales Marketing (FSM), Affiliate Marketing, conversion websites, and influencers." },
    { property: "og:title", content: "sBLOOM | We Help You Get More Revenue" },
    { property: "og:description", content: "sBLOOM delivers qualified paying customers in person and online through Field Sales Marketing (FSM), Affiliate Marketing, conversion websites, and influencers." },
  ];
};

export default function Route() {
  return <HomePage />;
}
