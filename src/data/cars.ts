export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number; // In Lakhs
  mileage: number; // In km
  transmission: "Automatic" | "Manual";
  fuel: "Petrol" | "Diesel" | "CNG" | "Electric";
  engine: string;
  color: string;
  condition: "Certified" | "Excellent" | "Good";
  vin: string;
  imageUrl: string;
  description: string;
}

export const cars: Car[] = [
  {
    id: "1",
    make: "Maruti Suzuki",
    model: "Swift",
    year: 2022,
    price: 7.5,
    mileage: 18500,
    transmission: "Manual",
    fuel: "Petrol",
    engine: "1.2L DualJet",
    color: "Solid Red",
    condition: "Excellent",
    vin: "MA3F1234567890",
    imageUrl: "/images/car-swift-red.png",
    description: "Well-maintained Swift with low mileage. Perfect for city driving and fuel efficiency. Comes with a complete service history."
  },
  {
    id: "2",
    make: "Tata",
    model: "Nexon EV",
    year: 2023,
    price: 15.8,
    mileage: 12000,
    transmission: "Automatic",
    fuel: "Electric",
    engine: "Permanent Magnet Synchronous Motor",
    color: "Signature Teal Blue",
    condition: "Certified",
    vin: "MATN9876543210",
    imageUrl: "/images/car-nexon-ev.webp",
    description: "Future of driving! Tata Nexon EV with long range and fast charging. Eco-friendly and extremely smooth to drive."
  },
  {
    id: "3",
    make: "Mahindra",
    model: "XUV700",
    year: 2021,
    price: 22.5,
    mileage: 35000,
    transmission: "Automatic",
    fuel: "Diesel",
    engine: "2.2L mHawk",
    color: "Midnight Black",
    condition: "Excellent",
    vin: "MAMX1122334455",
    imageUrl: "/images/car-xuv700.webp",
    description: "The ultimate SUV experience. Packed with tech features and safety. Powerful engine and premium interior."
  },
  {
    id: "4",
    make: "Hyundai",
    model: "Creta",
    year: 2022,
    price: 14.2,
    mileage: 22000,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "1.5L MPi",
    color: "Polar White",
    condition: "Excellent",
    vin: "MALH5566778899",
    imageUrl: "/images/car-creta.webp",
    description: "Popular SUV with great road presence. Comfortable ride quality and feature-rich cabin. Ideal for families."
  },
  {
    id: "5",
    make: "Toyota",
    model: "Fortuner",
    year: 2020,
    price: 34.0,
    mileage: 58000,
    transmission: "Automatic",
    fuel: "Diesel",
    engine: "2.8L GD",
    color: "Silver Metallic",
    condition: "Good",
    vin: "MATY9988776655",
    imageUrl: "/images/car-fortuner.webp",
    description: "The king of SUVs. Unmatched reliability and off-road capability. Spacious 7-seater with robust build quality."
  },
  {
    id: "6",
    make: "Kia",
    model: "Seltos",
    year: 2022,
    price: 13.5,
    mileage: 25000,
    transmission: "Manual",
    fuel: "Petrol",
    engine: "1.5L Smartstream",
    color: "Intense Red",
    condition: "Excellent",
    vin: "MAKK3344556677",
    imageUrl: "/images/car-seltos.webp",
    description: "Modern and stylish compact SUV. Great tech features and eye-catching design. Smooth handling and comfortable seats."
  },
  {
    id: "7",
    make: "Maruti Suzuki",
    model: "Baleno",
    year: 2023,
    price: 8.9,
    mileage: 8000,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "1.2L DualJet",
    color: "Celestial Blue",
    condition: "Certified",
    vin: "MA3F5544332211",
    imageUrl: "/images/car-swift.webp",
    description: "Premium hatchback with modern tech. Spacious cabin and smooth AMT gearbox. Great fuel efficiency for daily commutes."
  },
  {
    id: "8",
    make: "Honda",
    model: "City",
    year: 2021,
    price: 12.0,
    mileage: 32000,
    transmission: "Manual",
    fuel: "Petrol",
    engine: "1.5L i-VTEC",
    color: "Golden Brown Metallic",
    condition: "Excellent",
    vin: "MAHC1122334455",
    imageUrl: "/images/car-honda-city.png",
    description: "The classic sedan. Comfortable, reliable, and smooth engine performance. Premium feel and great resale value."
  },
  {
    id: "9",
    make: "Skoda",
    model: "Slavia",
    year: 2022,
    price: 11.5,
    mileage: 21000,
    transmission: "Manual",
    fuel: "Petrol",
    engine: "1.0L TSI",
    color: "Crystal Blue",
    condition: "Excellent",
    vin: "MASK8877665544",
    imageUrl: "/images/car-slavia.webp",
    description: "Dynamic performance and elegant design. The 1.0L TSI engine offers a punchy drive with great European build quality."
  }
];
