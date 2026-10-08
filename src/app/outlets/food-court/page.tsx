import { Metadata } from "next";
import FoodCourtClient from "./FoodCourtClient";

export const metadata: Metadata = {
  title: "POS for Food Courts | BillBite",
  description: "Centralized cashiers, pager integrations, token slip printing, and multi-stall management for food courts.",
};

export default function FoodCourtPage() {
  return <FoodCourtClient />;
}
