import { Metadata } from "next";
import RetailClient from "./RetailClient";

export const metadata: Metadata = {
  title: "POS for Retail & Grocery Stores | BillBite",
  description: "High-speed barcode scanning, batch & expiry tracking, weighing scale integration, and automated reordering for modern supermarkets.",
};

export default function RetailGroceryPage() {
  return <RetailClient />;
}
