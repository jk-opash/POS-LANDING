import { Metadata } from 'next';
import InventoryClient from './InventoryClient';

export const metadata: Metadata = {
  title: "Smart POS Inventory Management Software | Real-Time Stock Control",
  description: "Stop guessing your food costs. Track every gram of raw material, manage recipes, and auto-deduct stock with every sale using our POS Inventory Management Software.",
};

export default function InventoryManagementPage() {
  return <InventoryClient />;
}
