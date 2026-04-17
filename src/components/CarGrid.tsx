"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarCard } from "./CarCard";
import { Car } from "@/data/cars";

interface CarGridProps {
  cars: Car[];
  onCarSelect: (car: Car) => void;
}

export const CarGrid: React.FC<CarGridProps> = ({ cars, onCarSelect }) => {
  if (cars.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center border border-dashed border-neutral-200 bg-neutral-50">
        <h3 className="text-xl font-black uppercase tracking-tighter text-neutral-900 mb-2">Zero Matches Found</h3>
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Please refine your search parameters or reset filters.</p>
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
