import { Metadata } from 'next';
import OnlineOrderClient from './OnlineOrderClient';

export const metadata: Metadata = {
  title: "POS Online Order Sync & Zomato/Swiggy Reconciliation Software",
  description: "Manage Zomato, Swiggy, and direct online orders directly on your POS. Push menus centrally and automatically reconcile aggregator payouts.",
};

export default function OnlineOrderingReconciliationPage() {
  return <OnlineOrderClient />;
}
