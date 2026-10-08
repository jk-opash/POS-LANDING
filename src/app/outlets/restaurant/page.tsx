import { Metadata } from "next";
import RestaurantClient from "./RestaurantClient";

export const metadata: Metadata = {
  title: "POS for Fine Dine & Casual Restaurants | BillBite",
  description: "Deliver exceptional dining experiences with seamless table management, KOT routing, and multi-device billing.",
};

export default function RestaurantPage() {
  return <RestaurantClient />;
}
