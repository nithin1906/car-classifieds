"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gauge, Settings2, Fuel, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
  onClick: (car: Car) => void;
  priority?: boolean;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onClick, priority = false }) => {
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      layout
      className="h-full"
    >
      <Card 
        className="flex flex-col h-full overflow-hidden border-zinc-200 bg-white hover:border-red-200 transition-all cursor-pointer group rounded-sm shadow-none premium-shadow premium-shadow-hover"
        onClick={() => onClick(car)}
      >
        {/* Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden shrink-0">
          <Image
            src={car.imageUrl}
            alt={`${car.year} ${car.make} ${car.model}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge className="bg-zinc-900/90 text-white border-none rounded-sm text-[10px] font-bold tracking-widest uppercase">
              {car.year}
            </Badge>
            {car.condition === "Certified" && (
              <Badge className="bg-red-600 text-white border-none rounded-sm text-[10px] font-bold tracking-widest uppercase">
                Certified
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="p-4 md:p-6 flex-grow">
          <div className="flex justify-between items-start mb-3 md:mb-4">
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-black text-zinc-900 uppercase tracking-tighter line-clamp-1 group-hover:text-red-600 transition-colors">
                {car.make} {car.model}
              </h3>
              <p className="text-zinc-400 text-[9px] md:text-[10px] uppercase font-bold tracking-widest mt-0.5 md:mt-1">{car.engine}</p>
            </div>
            <div className="text-right shrink-0 ml-2">
              <span className="text-base md:text-lg font-black text-zinc-900">₹{car.price}L</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 md:gap-2 py-3 md:py-4 border-y border-zinc-100 mt-auto">
            <div className="flex flex-col items-center gap-0.5 md:gap-1">
              <Gauge className="h-2.5 w-2.5 md:h-3 md:w-3 text-zinc-300" />
              <span className="text-[7px] md:text-[8px] uppercase tracking-widest text-zinc-400 font-bold">Mileage</span>
              <span className="text-[9px] md:text-[10px] font-bold text-zinc-700">{car.mileage.toLocaleString()} KM</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 md:gap-1 border-x border-zinc-100 px-1">
              <Settings2 className="h-2.5 w-2.5 md:h-3 md:w-3 text-zinc-300" />
              <span className="text-[7px] md:text-[8px] uppercase tracking-widest text-zinc-400 font-bold">Trans</span>
              <span className="text-[9px] md:text-[10px] font-bold text-zinc-700">{car.transmission}</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 md:gap-1">
              <Fuel className="h-2.5 w-2.5 md:h-3 md:w-3 text-zinc-300" />
              <span className="text-[7px] md:text-[8px] uppercase tracking-widest text-zinc-400 font-bold">Fuel</span>
              <span className="text-[9px] md:text-[10px] font-bold text-zinc-700">{car.fuel}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 md:p-6 pt-0">
          <Button 
            className="w-full justify-between bg-zinc-900 hover:bg-red-600 transition-all text-white rounded-sm h-10 md:h-11 px-4 md:px-5 border-none font-bold uppercase tracking-widest text-[9px] md:text-[10px]"
          >
            <span>View Details & Inquire</span>
            <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
