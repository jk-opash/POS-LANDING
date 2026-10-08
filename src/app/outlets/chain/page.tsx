import { Metadata } from "next";
import ChainClient from "./ChainClient";

export const metadata: Metadata = {
  title: "POS for Large Chains & Franchises | BillBite",
  description: "Enterprise dashboards, central kitchen dispatch, franchise royalties, and multi-store analytics for large chains.",
};

export default function ChainPage() {
  return <ChainClient />;
}
