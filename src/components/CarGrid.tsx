"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CarCard } from "./CarCard";
import { Car } from "@/data/cars";

interface CarGridProps {
  cars: Car[];
  onCarSelect: (car: Car) => void;
}

export const CarGrid: React.FC<CarGridProps> = ({ cars, onCarSelect }) => {
  if (cars.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 md:py-32 text-center border border-dashed border-zinc-200 bg-zinc-50 rounded-sm">
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-zinc-900 mb-3">Zero Matches Found</h3>
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8 max-w-xs md:max-w-none">Please refine your search parameters or reset filters.</p>
        
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Didn't find what you were looking for?</p>
          <a 
            href="#request-car" 
            className="inline-flex items-center gap-3 bg-zinc-900 text-white px-8 h-12 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-600 transition-all"
          >
            <span>Request a Specific Car</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      <AnimatePresence mode="popLayout">
        {cars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="h-full"
          >
            <CarCard 
              car={car} 
              onClick={onCarSelect} 
              priority={index < 4} 
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
