import { Metadata } from "next";
import QSRClient from "./QSRClient";

export const metadata: Metadata = {
  title: "POS for QSR & Fast Food | BillBite",
  description: "Self-serve kiosks, kitchen displays, drive-thru timers, and combo management for high-speed QSRs.",
};

export default function QSRPage() {
  return <QSRClient />;
}
