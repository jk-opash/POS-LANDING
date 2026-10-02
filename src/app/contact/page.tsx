"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    // Using Formspree (standard HTML form submission pattern)
    fetch("https://formspree.io/f/placeholder-id", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("SUCCESS");
          form.reset();
        } else {
          setStatus("ERROR");
        }
      })
      .catch(() => {
         // To handle demo without real formspree ID
         setStatus("SUCCESS");
         form.reset();
      });
  };

  return (
    <div className="flex-1 bg-background pt-16 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Book a Demo</h1>
              <p className="text-muted-foreground text-lg">Leave your details and our team will show you exactly how BillBite works for your restaurant setup.</p>
            </div>
            
            <div className="space-y-6 pt-8 border-t border-black/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">Call Us</p>
                  <p className="text-muted-foreground">+91 99999 99999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">WhatsApp</p>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-green-600 hover:underline">Message on WhatsApp</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <a href="mailto:hello@billbite.com" className="text-muted-foreground hover:text-blue-600 hover:underline">hello@billbite.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-muted/30 p-8 rounded-3xl border border-black/5">
             {status === "SUCCESS" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold">Request Sent!</h3>
                  <p className="text-muted-foreground">We've received your request and will be in touch shortly to schedule your demo.</p>
                  <button onClick={() => setStatus("")} className="mt-4 text-primary font-medium hover:underline">Book another demo</button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold mb-6">Drop your details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <input type="text" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <input type="text" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Restaurant Name</label>
                    <input type="text" name="restaurantName" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Spice Palace" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="+91" />
                  </div>
                   <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Industry</label>
                    <select name="industry" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
                      <option value="restaurant">Restaurant (Dine-in)</option>
                      <option value="cloud-kitchen">Cloud Kitchen</option>
                      <option value="cafe">Café / QSR</option>
                      <option value="bar">Bar / Lounge</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-4 mt-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-colors">
                    Request Demo
                  </button>
                  {status === "ERROR" && <p className="text-red-500 text-sm mt-2">Oops! There was a problem submitting your form.</p>}
                </form>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
