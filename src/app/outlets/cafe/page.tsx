import { Metadata } from "next";
import CafeClient from "./CafeClient";

export const metadata: Metadata = {
  title: "POS for Cafes, Bakeries & QSRs | BillBite",
  description: "Bust the queues with lightning-fast counter billing, dynamic combo management, and built-in customer loyalty programs.",
};

export default function CafePage() {
  return <CafeClient />;
}
