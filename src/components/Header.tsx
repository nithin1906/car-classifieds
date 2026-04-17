"use client";

import React from "react";
import { Search, Car, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const [isMobileSearchVisible, setIsMobileSearchVisible] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800">
      {/* Premium accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-red-600 p-1.5 rounded-sm">
              <Car className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-white">
              DriveMarket <span className="text-white/70 hidden sm:inline">India</span>
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl relative group mx-4 lg:mx-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-sm blur opacity-0 group-focus-within:opacity-20 transition duration-500"></div>
            <div className="relative flex items-center w-full">
              <Search className="absolute left-4 h-4 w-4 text-zinc-500 group-focus-within:text-red-500 transition-colors" />
              <Input
                placeholder="Search premium vehicles (e.g. BMW, SUV, Petrol)..."
                className="pl-12 bg-zinc-900/50 border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:border-red-600 focus:ring-0 transition-all rounded-none h-12 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
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
              <Button className="bg-red-600 text-white hover:bg-red-700 rounded-none font-black uppercase tracking-widest px-6 h-12 text-xs border-none shadow-lg shadow-red-600/10">
                Sell Your Car
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="text-zinc-400 lg:hidden hover:text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Area */}
        {isMobileSearchVisible && (
          <div className="md:hidden pb-6 pt-2 border-t border-zinc-800 animate-in slide-in-from-top-2 duration-200">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-sm blur opacity-10 transition duration-500"></div>
              <div className="relative flex items-center w-full">
                <Search className="absolute left-4 h-4 w-4 text-zinc-500" />
                <Input
                  placeholder="Search make or model..."
                  className="pl-12 bg-zinc-900 border-zinc-700 text-sm text-white placeholder:text-zinc-500 focus:border-red-600 focus:ring-0 transition-all rounded-none h-12 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>

  );
};
