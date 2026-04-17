"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, CreditCard } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 border-b border-zinc-100 bg-white overflow-hidden">
      {/* Background patterns and gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-zinc-50 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

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
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20">
            <button 
              onClick={() => {
                const element = document.getElementById("listings");
                if (element) {
                  const headerOffset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto px-8 h-12 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center hover:bg-zinc-800 transition-colors"
            >
              Browse Inventory
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById("request-car");
                if (element) {
                  const headerOffset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto px-8 h-12 border border-zinc-200 text-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center hover:bg-zinc-50 transition-colors"
            >
              Request Custom Sourcing
            </button>
          </div>
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
