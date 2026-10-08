import { Metadata } from 'next';
import MenuClient from './MenuClient';

export const metadata: Metadata = {
  title: "Centralized Restaurant Menu Management Software | Multi-Outlet Sync",
  description: "Manage menu categories, complex variants, custom add-ons, and prices across all your franchise outlets and online platforms from one single dashboard.",
};

export default function MenuManagementPage() {
  return <MenuClient />;
}
