import React from "react";

export default function RefundPolicyPage() {
  return (
    <div className="flex-1 bg-background pt-16 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Refund & Cancellation Policy</h1>
        <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Subscription Cancellations</h2>
          <p>
            You may cancel your BillBite subscription at any time. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please contact us.
          </p>
           <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Refunds</h2>
          <p>
             Refunds for annual subscriptions will be provided on a prorated basis if requested within the first 30 days of the subscription start date. Monthly subscriptions are non-refundable, but you will retain access to the service until the end of your current billing period following a cancellation.
          </p>
           <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Hardware Returns</h2>
          <p>
            If you purchased hardware directly through BillBite, returns are accepted within 14 days of delivery, provided the equipment is in its original condition and packaging. Return shipping costs are the responsibility of the customer unless the equipment arrived defective.
          </p>
          <p className="mt-12 text-xs">
            *This is a placeholder Refund Policy for the landing page demonstration.*
          </p>
        </div>
      </div>
    </div>
  );
}
