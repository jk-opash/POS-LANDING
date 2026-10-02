"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Link>
      
      <div className="w-full max-w-md bg-white rounded-3xl border border-black/10 shadow-2xl p-8">
        <div className="text-center mb-10">
           <div className="w-12 h-12 mx-auto rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl mb-4">
            B
          </div>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground text-sm mt-2">Log in to your BillBite dashboard</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email / Username</label>
            <input type="email" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="admin@restaurant.com" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Password</label>
              <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
            </div>
            <input type="password" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="••••••••" />
          </div>
          <button type="button" onClick={() => alert('This is a demo frontend. Backend authentication is not connected.')} className="w-full py-3 mt-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-colors">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
