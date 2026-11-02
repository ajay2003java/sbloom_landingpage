import type { MetaFunction } from "react-router";
import { SolutionsOverviewPage } from "../pages/solutions/SolutionsOverviewPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Website & Google Maps Top 3 | sBLOOM Revenue Services" },
    { name: "description", content: "Capture high-intent local searchers with a conversion-engineered website and Google Business Profile Top 3 ranking." },
    { property: "og:title", content: "Website & Google Maps Top 3 | sBLOOM Revenue Services" },
    { property: "og:description", content: "Capture high-intent local searchers with a conversion-engineered website and Google Business Profile Top 3 ranking." },
  ];
};

export default function Route() {
  return <SolutionsOverviewPage initialSection="digital" />;
}
