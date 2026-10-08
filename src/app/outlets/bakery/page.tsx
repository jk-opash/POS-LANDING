import { Metadata } from "next";
import BakeryClient from "./BakeryClient";

export const metadata: Metadata = {
  title: "POS for Bakeries & Cake Shops | BillBite",
  description: "Advance pre-orders, custom cake management, batch expiry tracking, and barcode generation for modern bakeries.",
};

export default function BakeryPage() {
  return <BakeryClient />;
}
