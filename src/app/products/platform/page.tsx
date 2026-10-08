import { Metadata } from 'next';
import PlatformClient from './PlatformClient';

export const metadata: Metadata = {
  title: "POS Enterprise Platform | Multi-Branch, Roles & Security Audits",
  description: "A complete suite of modules to manage multi-branch operations, staff role permissions, supplier CRM, petty cash, and immutable security audit logs.",
};

export default function PlatformPage() {
  return <PlatformClient />;
}
