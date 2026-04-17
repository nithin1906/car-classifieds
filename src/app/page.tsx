"use client";

import React, { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CarGrid } from "@/components/CarGrid";
import { CarDetailModal } from "@/components/CarDetailModal";
import { CarRequestSection } from "@/components/CarRequestSection";
import { cars, Car } from "@/data/cars";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [makeFilter, setMakeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesSearch =
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesMake = makeFilter === "" || car.make === makeFilter;

      const matchesPrice =
        priceFilter === "" ||
        car.price <= parseFloat(priceFilter);

      return matchesSearch && matchesMake && matchesPrice;
    });
  }, [searchTerm, makeFilter, priceFilter]);

  const handleCarSelect = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Don't null selectedCar immediately to allow exit animation to complete if needed
  };

  return (
    <main className="min-h-screen bg-background">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        makeFilter={makeFilter}
        setMakeFilter={setMakeFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />

      <Hero />

      <div id="listings" className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12 border-b border-zinc-100 pb-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-zinc-900">
            Available Listings
            <span className="ml-4 px-3 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-black tracking-widest uppercase align-middle">
              {filteredCars.length} Units
            </span>
          </h2>
        </div>

        <CarGrid
          cars={filteredCars}
          onCarSelect={handleCarSelect}
        />
      </div>

      <div id="request-car">
        <CarRequestSection />
      </div>

      <CarDetailModal
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <footer className="bg-zinc-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <span className="text-xl font-black tracking-tighter uppercase">
                DriveMarket <span className="text-red-600">India</span>
              </span>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-2">
                Premium Automotive Intelligence
              </p>
            </div>

            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              <a href="#" className="hover:text-red-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Compliance</a>
              <a href="#" className="hover:text-red-600 transition-colors">Support</a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-700 text-center">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              © 2026 DriveMarket India. Professional Grade Classifieds.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
