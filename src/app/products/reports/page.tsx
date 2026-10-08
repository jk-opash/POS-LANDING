import { Metadata } from 'next';
import ReportsClient from './ReportsClient';

export const metadata: Metadata = {
  title: "Restaurant Analytics & POS Reports Software | Real-Time Sales",
  description: "Stop guessing. Get real-time insights into your restaurant's performance. Track live sales, identify best-sellers, and export GST data for your CA in one click.",
};

export default function ReportsPage() {
  return <ReportsClient />;
}
