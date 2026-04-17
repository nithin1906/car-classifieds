"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gauge, Settings2, Fuel, ShieldCheck, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LeadForm } from "./LeadForm";
import { Car } from "@/data/cars";

interface CarDetailModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({
  car,
  isOpen,
  onClose,
}) => {
  if (!car) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] sm:max-w-6xl p-0 overflow-hidden border-neutral-200 bg-white sm:rounded-none premium-shadow">
        <div className="w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
          <div className="flex flex-col lg:flex-row w-full">
            {/* Left Column - Car Info */}
            <div className="flex-1 p-5 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-zinc-100">
              <div className="relative aspect-video rounded-none overflow-hidden mb-6 md:mb-10 border border-zinc-200">
                <Image
                  src={car.imageUrl}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-cover"
                />
              </div>

              <div className="space-y-8 md:space-y-10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <span className="text-[9px] md:text-[10px] font-black text-red-600 tracking-[0.2em] uppercase">
                      {car.condition} Condition
                    </span>
                    <div className="hidden xs:block h-1 w-1 rounded-full bg-zinc-300" />
                    <span className="text-[9px] md:text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                      VIN: {car.vin}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tighter mb-4 md:mb-6 uppercase text-zinc-900 leading-tight">
                    {car.year} {car.make} {car.model}
                  </h2>
                  <div className="flex items-baseline gap-3 md:gap-4">
                    <span className="text-3xl md:text-4xl font-black text-zinc-900">₹{car.price}L</span>
                    <span className="text-zinc-300 line-through text-lg md:text-xl font-bold">₹{Math.round(car.price * 1.1)}L</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 py-6 md:py-8 border-y border-zinc-100">
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex items-center gap-2 text-zinc-400 mb-1">
                      <Gauge className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em]">Mileage</span>
                    </div>
                    <p className="text-lg md:text-xl font-black text-zinc-800 uppercase tracking-tight">{car.mileage.toLocaleString()} km</p>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex items-center gap-2 text-zinc-400 mb-1">
                      <Settings2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em]">Trans</span>
                    </div>
                    <p className="text-lg md:text-xl font-black text-zinc-800 uppercase tracking-tight">{car.transmission}</p>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex items-center gap-2 text-zinc-400 mb-1">
                      <Fuel className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em]">Fuel</span>
                    </div>
                    <p className="text-lg md:text-xl font-black text-zinc-800 uppercase tracking-tight">{car.fuel}</p>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex items-center gap-2 text-zinc-400 mb-1">
                      <Info className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em]">Engine</span>
                    </div>
                    <p className="text-lg md:text-xl font-black text-zinc-800 uppercase tracking-tight">{car.engine}</p>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex items-center gap-2 text-zinc-400 mb-1">
                      <ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em]">Color</span>
                    </div>
                    <p className="text-lg md:text-xl font-black text-zinc-800 uppercase tracking-tight">{car.color}</p>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-900">Vehicle Description</h4>
                  <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                    {car.description}
                  </p>
                  <div className="p-4 md:p-5 bg-zinc-50 border border-zinc-200">
                    <p className="text-[10px] md:text-xs text-zinc-600 font-bold flex items-center gap-3 uppercase tracking-wider">
                      <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
                      Certified Technical Inspection Verified
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-[450px] bg-zinc-50 p-6 sm:p-8 lg:p-12">
              <LeadForm car={car} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
