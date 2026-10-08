import { Metadata } from "next";
import PizzeriaClient from "./PizzeriaClient";

export const metadata: Metadata = {
  title: "POS for Pizzerias | BillBite",
  description: "Half-and-half logic, delivery driver tracking, crust modifiers, and caller ID integration for modern pizzerias.",
};

export default function PizzeriaPage() {
  return <PizzeriaClient />;
}
