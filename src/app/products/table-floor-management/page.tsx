import { Metadata } from 'next';
import TableFloorClient from './TableFloorClient';

export const metadata: Metadata = {
  title: "POS Table & Floor Management Software | Live Occupancy",
  description: "Replicate your exact restaurant floor plan with a visual drag-and-drop editor. Track live table statuses, merge tables, and manage waitlists efficiently.",
};

export default function TableFloorManagementPage() {
  return <TableFloorClient />;
}
