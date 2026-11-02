import type { MetaFunction } from "react-router";
import { SolutionsOverviewPage } from "../pages/solutions/SolutionsOverviewPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Revenue & 360° Lead Generation Services | sBLOOM" },
    { name: "description", content: "We help you get more revenue. Field sales marketing, affiliate marketing, high-conversion website & Google Maps Top 3, and authentic influencer partnerships." },
    { property: "og:title", content: "Revenue & 360° Lead Generation Services | sBLOOM" },
    { property: "og:description", content: "We help you get more revenue. Field sales marketing, affiliate marketing, high-conversion website & Google Maps Top 3, and authentic influencer partnerships." },
  ];
};

export default function Route() {
  return <SolutionsOverviewPage />;
}
