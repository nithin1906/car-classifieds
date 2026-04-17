"use client";

import React, { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CarGrid } from "@/components/CarGrid";
import { CarDetailModal } from "@/components/CarDetailModal";
import { CarRequestSection } from "@/components/CarRequestSection";
import { cars, Car } from "@/data/cars";
import { CarFront, Banknote, ListFilter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [makeFilter, setMakeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCars = useMemo(() => {
    let result = cars.filter((car) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        car.make.toLowerCase().includes(searchLower) ||
        car.model.toLowerCase().includes(searchLower) ||
        car.fuel.toLowerCase().includes(searchLower) ||
        car.bodyType.toLowerCase().includes(searchLower) ||
        car.transmission.toLowerCase().includes(searchLower) ||
        car.description.toLowerCase().includes(searchLower);

      const matchesMake = makeFilter === "" || car.make === makeFilter;

      const matchesPrice =
        priceFilter === "" ||
        car.price <= parseFloat(priceFilter);

      return matchesSearch && matchesMake && matchesPrice;
    });

    // Apply sorting
    return [...result].sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "mileage") return a.mileage - b.mileage;
      return 0; // Default (data order is usually newest)
    });
  }, [searchTerm, makeFilter, priceFilter, sortBy]);

  const handleCarSelect = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  // Auto-scroll to listings when searching
  React.useEffect(() => {
    if (searchTerm.trim() !== "") {
      const listingsSection = document.getElementById("listings");
      if (listingsSection) {
        const headerOffset = 100; // Account for fixed header
        const elementPosition = listingsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Only scroll if we are currently above the listings section
        if (window.pageYOffset < offsetPosition - 100) {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }
  }, [searchTerm]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Don't null selectedCar immediately to allow exit animation to complete if needed
  };

  return (
    <main className="min-h-screen bg-white">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Hero />

      <div className="bg-zinc-50/50">
        <div id="listings" className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-200 pb-8 gap-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-zinc-900">
              Available Listings
              <span className="ml-4 px-3 py-1 bg-zinc-900 text-white text-[10px] font-black tracking-widest uppercase align-middle">
                {filteredCars.length} Units
              </span>
            </h2>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Select value={makeFilter} onValueChange={(val) => setMakeFilter(val ?? "")}>
                <SelectTrigger className="w-[140px] bg-white border-zinc-200 text-[10px] font-black uppercase tracking-wider h-10 rounded-none focus:ring-0 focus:border-red-600 transition-all">
                  <div className="flex items-center gap-2">
                    <CarFront className="h-3.5 w-3.5 text-zinc-400" />
                    <SelectValue placeholder="ALL MAKES" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border-zinc-200">
                  <SelectItem value="">ALL MAKES</SelectItem>
                  <SelectItem value="Maruti Suzuki">MARUTI SUZUKI</SelectItem>
                  <SelectItem value="Tata">TATA</SelectItem>
                  <SelectItem value="Mahindra">MAHINDRA</SelectItem>
                  <SelectItem value="Hyundai">HYUNDAI</SelectItem>
                  <SelectItem value="Toyota">TOYOTA</SelectItem>
                  <SelectItem value="Kia">KIA</SelectItem>
                  <SelectItem value="Honda">HONDA</SelectItem>
                  <SelectItem value="Skoda">SKODA</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={(val) => setPriceFilter(val ?? "")}>
                <SelectTrigger className="w-[160px] bg-white border-zinc-200 text-[10px] font-black uppercase tracking-wider h-10 rounded-none focus:ring-0 focus:border-red-600 transition-all">
                  <div className="flex items-center gap-2">
                    <Banknote className="h-3.5 w-3.5 text-zinc-400" />
                    <SelectValue placeholder="BUDGET" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border-zinc-200">
                  <SelectItem value="">ALL PRICES</SelectItem>
                  <SelectItem value="10">UNDER ₹10 LAKH</SelectItem>
                  <SelectItem value="15">UNDER ₹15 LAKH</SelectItem>
                  <SelectItem value="25">UNDER ₹25 LAKH</SelectItem>
                  <SelectItem value="50">UNDER ₹50 LAKH</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-[1px] h-6 bg-zinc-200 hidden sm:block mx-1"></div>

            <Select value={sortBy} onValueChange={(val) => setSortBy(val ?? "newest")}>
              <SelectTrigger className="w-[160px] bg-zinc-50 border-transparent text-[10px] font-black uppercase tracking-wider h-10 rounded-none focus:ring-0 transition-all">
                <div className="flex items-center gap-2">
                  <ListFilter className="h-3.5 w-3.5 text-zinc-400" />
                  <SelectValue placeholder="SORT BY" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-zinc-200">
                <SelectItem value="newest">LATEST ARRIVALS</SelectItem>
                <SelectItem value="price-low">PRICE: LOW TO HIGH</SelectItem>
                <SelectItem value="price-high">PRICE: HIGH TO LOW</SelectItem>
                <SelectItem value="mileage">LOWEST MILEAGE</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <CarGrid
          cars={filteredCars}
          onCarSelect={handleCarSelect}
        />
      </div>
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
