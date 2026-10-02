import React from "react";

export default function AboutPage() {
  return (
    <div className="flex-1 bg-background pt-16 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About BillBite</h1>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-2xl font-medium text-foreground">
            BillBite exists because the gap between a generic billing software and the actual reality of running an Indian restaurant was too large.
          </p>

          <p>
            Most affordable POS systems in the market are glorified calculators. They can punch a bill and calculate GST, but they assume the restaurant operates in a vacuum. They assume an order only comes from a person standing at the counter, or sitting at a table.
          </p>
          
          <p>
            But the reality of an Indian restaurant today involves juggling dine-in customers, a Zomato tablet pinging with a new order, a Swiggy delivery partner asking if the food is ready, and a supplier dropping off stock—all at the same time. 
          </p>
          
          <p>
            Operators were forced to tape three different aggregator tablets to the wall, manually copy Zomato orders into their POS to maintain inventory records, and spend their Sundays trying to figure out if Swiggy actually paid them the correct amount after deductions.
          </p>
          
          <div className="p-8 bg-muted rounded-2xl border border-black/5 my-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">We built the software that multi-channel restaurants actually need.</h3>
            <ul className="space-y-3">
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> One unified screen for dine-in, takeaway, Zomato, and Swiggy.</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Granular payout reconciliation so you know exactly what hit your bank account.</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> A deep, enterprise-grade feature set (inventory, recipes, multi-branch, audit logs) packaged into an interface simple enough for a new cashier to learn in 10 minutes.</li>
            </ul>
          </div>

          <p>
            We are deeply technical operators. We don't hide behind "Call for pricing" when selling to small businesses. We publish our features, we publish our pricing, and we let the product speak for itself.
          </p>
        </div>
      </div>
    </div>
  );
}
