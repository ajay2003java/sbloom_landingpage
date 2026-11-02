import type { MetaFunction } from "react-router";
import { SolutionsOverviewPage } from "../pages/solutions/SolutionsOverviewPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Influencer Reach & Creator Partnerships | sBLOOM Revenue Services" },
    { name: "description", content: "Trusted domain voices sharing authentic recommendations that channel followers straight to your consultation desk." },
    { property: "og:title", content: "Influencer Reach & Creator Partnerships | sBLOOM Revenue Services" },
    { property: "og:description", content: "Trusted domain voices sharing authentic recommendations that channel followers straight to your consultation desk." },
  ];
};

export default function Route() {
  return <SolutionsOverviewPage initialSection="influencers" />;
}
