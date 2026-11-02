import type { MetaFunction } from "react-router";
import { SolutionsOverviewPage } from "../pages/solutions/SolutionsOverviewPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Affiliate Marketing & Warm Referrals | sBLOOM Revenue Services" },
    { name: "description", content: "Curated community connectors, respected doctors, and executives sending warm paying referrals." },
    { property: "og:title", content: "Affiliate Marketing & Warm Referrals | sBLOOM Revenue Services" },
    { property: "og:description", content: "Curated community connectors, respected doctors, and executives sending warm paying referrals." },
  ];
};

export default function Route() {
  return <SolutionsOverviewPage initialSection="advisors" />;
}
