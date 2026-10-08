import { Metadata } from "next";
import BarClient from "./BarClient";

export const metadata: Metadata = {
  title: "POS for Bars, Pubs & Lounges | BillBite",
  description: "Built for speed. Handle high-volume nightlife with fast tab management, happy hour automation, and precise liquid inventory control.",
};

export default function BarPage() {
  return <BarClient />;
}
