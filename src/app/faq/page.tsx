import React from "react";
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      q: "Can I use BillBite on a Mac or iPad?",
      a: "Yes. BillBite is a cloud-based web application. It runs in the browser on Windows, Mac, iPad, and Android tablets."
    },
    {
      q: "What hardware do I need?",
      a: "Any modern computer or tablet with an internet connection, a standard thermal printer (USB or Network), and optionally a barcode scanner or cash drawer."
    },
    {
      q: "Does it work offline?",
      a: "BillBite is a cloud-first system designed for real-time aggregation and multi-branch sync. It requires an active internet connection to process orders."
    },
    {
      q: "How does the Zomato/Swiggy integration work?",
      a: "Orders placed on aggregators flow directly into the BillBite POS screen. You accept them there, and they print to the kitchen just like a dine-in order. No separate tablets needed."
    },
    {
      q: "What is Payout Reconciliation?",
      a: "Aggregators deduct commissions, taxes, and discounts before paying you. Our system tracks the exact net amount you are owed per order, highlighting discrepancies if the actual bank transfer is short."
    },
    {
      q: "Is there a limit on users or devices?",
      a: "No. You can create unlimited staff accounts and log in from multiple devices (e.g., one iPad at the counter, one in the kitchen) simultaneously."
    },
    {
      q: "Do you charge setup fees?",
      a: "No hidden setup fees. The monthly subscription is the only cost."
    },
    {
      q: "How long are my records kept?",
      a: "Data is retained indefinitely while your subscription is active, with daily backups to secure cloud infrastructure."
    }
  ];

  return (
    <div className="flex-1 bg-background pt-16 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-xl">Everything you need to know about the product and billing.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl border border-black/10 bg-background hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
