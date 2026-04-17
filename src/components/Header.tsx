"use client";

import React from "react";
import { Search, Car, Menu, CarFront, Banknote } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  makeFilter: string;
  setMakeFilter: (value: string) => void;
  priceFilter: string;
  setPriceFilter: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  makeFilter,
  setMakeFilter,
  priceFilter,
  setPriceFilter,
}) => {
  const [isMobileSearchVisible, setIsMobileSearchVisible] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-800 text-white border-b border-zinc-700 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-red-600 p-1.5 rounded-sm">
              <Car className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight">
              DriveMarket <span className="text-white/70 hidden sm:inline">India</span>
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md relative group mx-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-white transition-colors" />
            <Input
              placeholder="Search make or model..."
              className="pl-10 bg-zinc-900 border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:border-red-600 transition-all rounded-sm h-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Select value={makeFilter} onValueChange={(val) => setMakeFilter(val ?? "")}>
              <SelectTrigger className="w-[130px] bg-zinc-900 border-zinc-700 text-xs text-white rounded-sm h-10">
                <CarFront className="h-3.5 w-3.5 mr-2 text-zinc-400" />
                <SelectValue placeholder="Make" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
                <SelectItem value="">Make</SelectItem>
                <SelectItem value="Maruti Suzuki">Maruti Suzuki</SelectItem>
                <SelectItem value="Tata">Tata</SelectItem>
                <SelectItem value="Mahindra">Mahindra</SelectItem>
                <SelectItem value="Hyundai">Hyundai</SelectItem>
                <SelectItem value="Toyota">Toyota</SelectItem>
                <SelectItem value="Kia">Kia</SelectItem>
                <SelectItem value="Honda">Honda</SelectItem>
                <SelectItem value="Skoda">Skoda</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={(val) => setPriceFilter(val ?? "")}>
              <SelectTrigger className="w-[150px] bg-zinc-900 border-zinc-700 text-xs text-white rounded-sm h-10">
                <Banknote className="h-3.5 w-3.5 mr-2 text-zinc-400" />
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
                <SelectItem value="">Price</SelectItem>
                <SelectItem value="10">Under ₹10 Lakh</SelectItem>
                <SelectItem value="15">Under ₹15 Lakh</SelectItem>
                <SelectItem value="25">Under ₹25 Lakh</SelectItem>
                <SelectItem value="50">Under ₹50 Lakh</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-zinc-400 md:hidden hover:text-white"
              onClick={() => setIsMobileSearchVisible(!isMobileSearchVisible)}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <div className="hidden sm:block">
              <Button className="bg-red-600 text-white hover:bg-red-700 rounded-sm font-bold px-4 md:px-6 h-9 md:h-10 text-xs md:text-sm">
                Sell Your Car
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="text-zinc-400 lg:hidden hover:text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search/Filter Area */}
        {isMobileSearchVisible && (
          <div className="md:hidden pb-4 pt-2 border-t border-zinc-700 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                  placeholder="Search make or model..."
                  className="pl-10 bg-zinc-900 border-zinc-700 text-sm text-white placeholder:text-zinc-500 rounded-sm h-11"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Select value={makeFilter} onValueChange={(val) => setMakeFilter(val ?? "")}>
                  <SelectTrigger className="w-full bg-zinc-900 border-zinc-700 text-xs text-white rounded-sm h-11">
                    <SelectValue placeholder="Make" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
                    <SelectItem value="">All Makes</SelectItem>
                    <SelectItem value="Maruti Suzuki">Maruti Suzuki</SelectItem>
                    <SelectItem value="Tata">Tata</SelectItem>
                    <SelectItem value="Mahindra">Mahindra</SelectItem>
                    <SelectItem value="Hyundai">Hyundai</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={priceFilter} onValueChange={(val) => setPriceFilter(val ?? "")}>
                  <SelectTrigger className="w-full bg-zinc-900 border-zinc-700 text-xs text-white rounded-sm h-11">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
                    <SelectItem value="">All Prices</SelectItem>
                    <SelectItem value="10">Under ₹10L</SelectItem>
                    <SelectItem value="25">Under ₹25L</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
