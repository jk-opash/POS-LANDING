import { Metadata } from "next";
import DessertClient from "./DessertClient";

export const metadata: Metadata = {
  title: "POS for Ice Cream & Dessert Shops | BillBite",
  description: "Fast scooping, frozen yogurt scales, topping modifiers, and tub inventory management for dessert shops.",
};

export default function DessertPage() {
  return <DessertClient />;
}
