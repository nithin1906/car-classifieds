"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, CreditCard } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 md:pt-24 pb-12 md:pb-20 border-b border-zinc-100 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-4 rounded-sm bg-red-600 text-white text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-6 md:mb-8">
            Premium Automotive Classifieds
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 tracking-tighter text-zinc-900 uppercase leading-[0.95]">
            Curated Excellence. <br className="hidden sm:block" />
            Professional Assurance.
          </h1>
          <p className="text-base md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-4">
            Discover a strictly vetted collection of premium pre-owned vehicles. 
            Verified history and multi-point inspections across India.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-8 md:mt-16"
        >
          <div className="flex items-center gap-4 md:gap-5 p-6 md:p-8 bg-white border border-zinc-100 premium-shadow">
            <div className="p-2.5 md:p-3 bg-zinc-50 rounded-sm shrink-0">
              <ShieldCheck className="h-6 w-6 md:h-7 md:w-7 text-red-600" />
            </div>
            <div className="text-left">
              <div className="text-xl md:text-2xl font-black text-zinc-900 tracking-tight">5,000+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Verified Units</div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-5 p-6 md:p-8 bg-white border border-zinc-100 premium-shadow">
            <div className="p-2.5 md:p-3 bg-zinc-50 rounded-sm shrink-0">
              <Zap className="h-6 w-6 md:h-7 md:w-7 text-red-600" />
            </div>
            <div className="text-left">
              <div className="text-xl md:text-2xl font-black text-zinc-900 tracking-tight">Fast Track</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Processing</div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-5 p-6 md:p-8 bg-white border border-zinc-100 premium-shadow">
            <div className="p-2.5 md:p-3 bg-zinc-50 rounded-sm shrink-0">
              <CreditCard className="h-6 w-6 md:h-7 md:w-7 text-red-600" />
            </div>
            <div className="text-left">
              <div className="text-xl md:text-2xl font-black text-zinc-900 tracking-tight">Premium</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Finance Suites</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
