"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Car } from "@/data/cars";

interface LeadFormProps {
  car: Car;
}

export const LeadForm: React.FC<LeadFormProps> = ({ car }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    contactMethod: "phone",
    message: `I am interested in the ${car.year} ${car.make} ${car.model}. Please let me know its availability and the best price.`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center animate-in fade-in zoom-in duration-500">
        <div className="bg-red-50 p-4 rounded-full mb-6">
          <CheckCircle2 className="h-12 w-12 text-red-600" />
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 mb-2">Inquiry Received</h3>
        <p className="text-zinc-500 text-sm font-medium mb-8">
          Your inquiry for the {car.make} {car.model} has been sent. Our executive will contact you shortly via {formData.contactMethod}.
        </p>
        <Button variant="outline" className="rounded-none border-zinc-200 text-zinc-600 font-bold uppercase tracking-widest text-[10px]" onClick={() => setIsSubmitted(false)}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      <div className="space-y-1 md:space-y-2">
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-zinc-900">Request Availability</h3>
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400">Secure Inquiry Processing</p>
      </div>

      <div className="space-y-5 md:space-y-6">
        <div className="space-y-1.5 md:space-y-2">
          <Label htmlFor="name" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-500">Full Name</Label>
          <Input 
            id="name" 
            required 
            placeholder="ENTER FULL NAME" 
            className="bg-white border-zinc-200 focus:border-red-600 rounded-none h-11 md:h-12 uppercase text-xs tracking-wider"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:gap-6">
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="phone" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-500">Phone Number</Label>
            <Input 
              id="phone" 
              type="tel" 
              required 
              placeholder="+91 00000 00000" 
              className="bg-white border-zinc-200 focus:border-red-600 rounded-none h-11 md:h-12 text-xs"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="email" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-500">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              placeholder="EMAIL@EXAMPLE.COM" 
              className="bg-white border-zinc-200 focus:border-red-600 rounded-none h-11 md:h-12 text-xs"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-1.5 md:space-y-2">
          <Label htmlFor="contactMethod" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-500">Preferred Contact</Label>
          <Select 
            value={formData.contactMethod} 
            onValueChange={(value) => setFormData({...formData, contactMethod: value ?? "phone"})}
          >
            <SelectTrigger className="bg-white border-zinc-200 focus:border-red-600 rounded-none h-11 md:h-12 text-xs uppercase tracking-wider">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border-neutral-200 rounded-none">
              <SelectItem value="phone">Phone Call</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="whatsapp">WhatsApp</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 md:space-y-2">
          <Label htmlFor="message" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-500">Inquiry Message</Label>
          <Textarea 
            id="message" 
            rows={4}
            className="bg-white border-zinc-200 focus:border-red-600 rounded-none resize-none text-xs leading-relaxed"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-red-600 hover:bg-red-700 transition-all text-white rounded-none h-12 md:h-14 font-black uppercase tracking-widest text-[10px] md:text-[11px] border-none"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="ml-2">Processing...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span className="ml-2">Request Availability</span>
          </>
        )}
      </Button>
      
      <p className="text-[9px] text-center text-zinc-400 uppercase font-bold tracking-widest">
        Inquiry represents a non-binding request for information.
      </p>
    </form>
  );
};
