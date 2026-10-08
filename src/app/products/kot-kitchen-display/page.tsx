import { Metadata } from 'next';
import KOTClient from './KOTClient';

export const metadata: Metadata = {
  title: "POS KOT & Kitchen Display System (KDS) | Digital Routing",
  description: "End kitchen chaos with digital KOT routing. Track prep times on live Kitchen Display Systems, manage multi-round running tabs, and print bold allergy alerts.",
};

export default function KOTKitchenDisplayPage() {
  return <KOTClient />;
}
