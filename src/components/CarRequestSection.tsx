"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CarRequestSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="bg-zinc-900 py-20 md:py-32 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block py-1 px-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Sourcing on Demand
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Can't find your <br />
              <span className="text-red-600">perfect drive?</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Our professional acquisition team specializes in tracking down specific high-performance and premium vehicles that aren't currently in our public listings.
            </p>
            
            <ul className="space-y-6">
              {[
                "Access to private automotive networks",
                "Rigorous multi-point inspection guarantee",
                "Complete documentation & verification",
                "Priority notification on new arrivals"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-300 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                  <div className="h-5 w-5 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                    <ArrowRight className="h-3 w-3 text-red-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 md:p-12 premium-shadow relative">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="h-20 w-20 bg-red-50 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-zinc-900 mb-4">Request Registered</h3>
                <p className="text-zinc-500 font-medium max-w-[300px] mb-8">
                  Our sourcing specialists will begin the search immediately. We will contact you via your preferred method.
                </p>
                <Button 
                  variant="outline" 
                  className="rounded-none border-zinc-200 text-zinc-600 font-bold uppercase tracking-widest text-xs"
                  onClick={() => setIsSubmitted(false)}
                >
                  New Request
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900">Vehicle Requirements</h3>
                  <div className="h-1 w-12 bg-red-600" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Target Make/Model</Label>
                    <Input 
                      required 
                      placeholder="E.G. TOYOTA FORTUNER" 
                      className="bg-zinc-50 border-zinc-200 focus:border-red-600 rounded-none h-12 uppercase text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Budget Range</Label>
                    <Select onValueChange={(val) => {}}>
                      <SelectTrigger className="bg-zinc-50 border-zinc-200 focus:border-red-600 rounded-none h-12 text-xs font-bold uppercase">
                        <SelectValue placeholder="SELECT BUDGET" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-zinc-200 rounded-none">
                        <SelectItem value="10-20">₹10L - ₹20L</SelectItem>
                        <SelectItem value="20-40">₹20L - ₹40L</SelectItem>
                        <SelectItem value="40-70">₹40L - ₹70L</SelectItem>
                        <SelectItem value="70+">₹70L+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Contact Name</Label>
                    <Input 
                      required 
                      placeholder="YOUR FULL NAME" 
                      className="bg-zinc-50 border-zinc-200 focus:border-red-600 rounded-none h-12 uppercase text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Phone Number</Label>
                    <Input 
                      type="tel" 
                      required 
                      placeholder="+91 00000 00000" 
                      className="bg-zinc-50 border-zinc-200 focus:border-red-600 rounded-none h-12 text-xs font-bold"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white rounded-none h-16 font-black uppercase tracking-widest text-xs md:text-sm border-none shadow-xl shadow-red-600/20"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <div className="flex items-center gap-3">
                      <Search className="h-5 w-5" />
                      <span>Initiate Custom Search</span>
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
