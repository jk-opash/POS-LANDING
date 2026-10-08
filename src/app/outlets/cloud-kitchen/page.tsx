import { Metadata } from "next";
import CloudKitchenClient from "./CloudKitchenClient";

export const metadata: Metadata = {
  title: "POS for Cloud Kitchens & Ghost Kitchens | BillBite",
  description: "End tablet hell. Consolidate Zomato, Swiggy, and direct orders into a single screen. Manage multiple virtual brands from one kitchen.",
};

export default function CloudKitchenPage() {
  return <CloudKitchenClient />;
}
