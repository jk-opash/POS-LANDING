import { Metadata } from 'next';
import BillingClient from './BillingClient';

export const metadata: Metadata = {
  title: "Fastest Restaurant Billing & POS System | Offline Ready",
  description: "Punch orders in under 3 clicks with our Restaurant Billing POS. Manage tables, KDS, online orders, and accept all payments with a fully offline-ready system.",
};

export default function BillingPOSPage() {
  return <BillingClient />;
}
