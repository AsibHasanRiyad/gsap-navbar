"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const shopData = [
  {
    name: "PC Components",
    children: [
      "Processor",
      "Motherboard",
      "RAM",
      "SSD",
      "HDD",
      "GPU",
      "PSU",
      "Casing",
      "CPU Cooler",
      "Thermal Paste",
    ],
  },
  {
    name: "Laptop",
    children: [
      "Gaming Laptop",
      "Ultrabook",
      "Business Laptop",
      "2-in-1 Laptop",
    ],
  },
  {
    name: "Desktop PC",
    children: ["Gaming PC", "Workstation", "Mini PC", "All-in-One"],
  },
  {
    name: "Gaming",
    children: ["Gaming Chair", "Gaming Desk", "Controllers", "Racing Wheel"],
  },
  {
    name: "Computer Accessories",
    children: [
      "Card Reader",
      "Microphone Stand",
      "Expansion Card",
      "Hubs & Docks",
      "Argb Controller",
      "Keyboard",
      "Mouse",
      "Keyboard Mouse Combo",
      "Mouse Bungee",
      "Mouse Pad",
      "Webcam",
      "Headphone",
      "Headphone Stand",
      "Microphone",
      "Pen Drive",
      "Power Strip",
      "USB Hub",
      "Memory Card",
      "Cable",
      "Converter and Splitters",
      "Thermal Pad",
      "Thermal Pastes",
      "Capture Card",
      "Bluetooth Adapter",
      "HDD Enclosure",
      "SSD Enclosure",
      "Wrist Rest",
    ],
  },
  {
    name: "Monitor",
    children: ["Gaming Monitor", "4K Monitor", "Ultrawide", "Portable Monitor"],
  },
  {
    name: "Gadget",
    children: ["Smart Watch", "Fitness Band", "VR Headset", "Drone"],
  },
  {
    name: "Audio",
    children: [
      "Headphones",
      "Earphones",
      "Speakers",
      "DAC & AMP",
      "Microphone",
    ],
  },
  {
    name: "Home Appliance",
    children: ["Air Purifier", "Smart Bulb", "Smart Plug"],
  },
  {
    name: "UPS IPS & Power Solutions",
    children: ["UPS", "IPS", "Generator", "Solar Panel"],
  },
  {
    name: "Office Equipment",
    children: ["Printer", "Scanner", "Projector", "Shredder"],
  },
  {
    name: "Network and Router",
    children: ["Router", "Switch", "Access Point", "Modem", "NIC Card"],
  },
  {
    name: "Server and NAS",
    children: ["Tower Server", "Rack Server", "NAS Device", "Server RAM"],
  },
  {
    name: "AI & Work Station HPC",
    children: ["GPU Workstation", "AI Accelerator", "HPC Cluster Node"],
  },
  {
    name: "Camera",
    children: ["DSLR", "Mirrorless", "Action Camera", "Drone Camera", "Lens"],
  },
  {
    name: "Security & Surveillance",
    children: ["IP Camera", "DVR/NVR", "Door Lock", "Video Doorbell"],
  },
  {
    name: "Smartphone and Tablet",
    children: ["Android", "iPhone", "iPad", "Android Tablet"],
  },
  {
    name: "PCB Featured PC",
    children: [],
  },
  {
    name: "PCB Merch",
    children: ["T-Shirt", "Cap", "Mug", "Sticker"],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(shopData[4]); // default to Accessories
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [mobileNestedOpen, setMobileNestedOpen] = useState(null);
  const shopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target)) {
        setShopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <style>{`
        .topbar-transition {
          transition: max-height 0s ,
                      opacity 0s ease,
                      transform 0s ;
          overflow: hidden;
        }
        .topbar-visible {
          max-height: 40px;
          opacity: 1;
          transform: translateY(0);
        }
        .topbar-hidden {
          max-height: 0;
          opacity: 0;
          transform: translateY(-100%);
        }
        .logo-transition {
          transition: width 0.55s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-transition {
          transition: background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease;
        }
        .mega-menu-enter {
          animation: megaFadeIn 0.2s ease forwards;
        }
        @keyframes megaFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .category-item {
          transition: background-color 0.15s ease, color 0.15s ease;
        }
        .sub-item {
          transition: color 0.15s ease;
        }
        .elegant-scrollbar::-webkit-scrollbar { width: 4px; }
        .elegant-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .elegant-scrollbar::-webkit-scrollbar-thumb { background: #555; border-radius: 2px; }
      `}</style>

      <header className="w-full fixed top-0 z-50">
        {/* TOP BAR */}
        <div
          className={`hidden md:block bg-black text-white text-xs topbar-transition ${
            scrolled ? "topbar-hidden" : "topbar-visible"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
            <div>09:42 AM</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                Newsletter
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                Contact Us
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                Forum
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div
          className={`nav-transition ${
            scrolled
              ? "bg-black/80 backdrop-blur-md shadow-lg shadow-black/40"
              : "bg-black"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Logo */}
            <div>
              <Image
                src="https://pcbstore.com.bd/_next/image?url=https%3A%2F%2Fadmin.pcbstore.net%2Fassets%2FLogo.png&w=640&q=75"
                width={400}
                height={100}
                alt="PCB"
                className={`logo-transition object-contain ${scrolled ? "w-16" : "w-24"}`}
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex gap-8 items-center relative">
              <a
                href="/"
                className="text-white hover:text-red-500 font-medium transition-colors"
              >
                Home
              </a>

              {/* SHOP MEGA MENU TRIGGER */}
              <div ref={shopRef} className="relative">
                <button
                  className="flex items-center gap-1 text-white hover:text-red-500 font-medium transition-colors"
                  onClick={() => setShopOpen((prev) => !prev)}
                >
                  Shop
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${shopOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* MEGA MENU */}
                {shopOpen && (
                  <div className="absolute left-1/2 top-12 -translate-x-1/2 w-[900px] z-50 mega-menu-enter">
                    <div className="shadow-xl outline outline-1 outline-offset-[-1px] outline-[#9a9393]">
                      <div className="w-full grid grid-cols-9">
                        {/* LEFT SIDEBAR — categories */}
                        <ul className="col-span-2 bg-zinc-800 overflow-y-auto max-h-[70vh] elegant-scrollbar">
                          {shopData.map((item, i) => (
                            <li
                              key={i}
                              className={`category-item group/item flex items-center justify-between cursor-pointer ${
                                activeCategory.name === item.name
                                  ? "bg-zinc-900"
                                  : "hover:bg-zinc-900"
                              }`}
                              onMouseEnter={() => setActiveCategory(item)}
                            >
                              <button
                                className={`max-w-48 text-left py-2 px-4 text-sm cursor-pointer transition-colors ${
                                  activeCategory.name === item.name
                                    ? "text-[#E42729]"
                                    : "text-white group-hover/item:text-[#E42729]"
                                }`}
                              >
                                {item.name}
                              </button>
                              {item.children.length > 0 && (
                                <div className="pr-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-4 h-4 transition-colors ${
                                      activeCategory.name === item.name
                                        ? "text-[#E42729]"
                                        : "text-gray-300 group-hover/item:text-[#E42729]"
                                    }`}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                    />
                                  </svg>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>

                        {/* RIGHT PANEL — sub-items */}
                        <div className="col-span-7 bg-stone-950 p-8 overflow-y-scroll scrollbar-hide min-h-[50vh] max-h-[70vh]">
                          {activeCategory.children.length > 0 ? (
                            <div className="grid grid-cols-3 gap-y-3">
                              {activeCategory.children.map((child, j) => (
                                <div
                                  key={j}
                                  className="border-b border-white/15 py-3"
                                >
                                  <button
                                    type="button"
                                    className="sub-item justify-start text-white text-sm leading-tight hover:text-[#E42729] cursor-pointer font-normal"
                                  >
                                    {child}
                                  </button>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                              No subcategories available
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/contact-us"
                className="text-white hover:text-red-500 font-medium transition-colors"
              >
                Contact Us
              </a>
            </nav>

            {/* Right Side */}
            <div className="hidden xl:flex gap-6 items-center">
              <button className="text-white hover:text-red-500 transition-colors text-sm">
                Login / Register
              </button>
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm text-white transition-colors">
                PC BUILDER
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`xl:hidden bg-black text-white overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            <a href="/" className="block py-2 border-b border-gray-700">
              Home
            </a>

            {/* Mobile Shop */}
            <div>
              <button
                className="w-full text-left py-2 border-b border-gray-700 flex justify-between items-center"
                onClick={() => setMobileShopOpen(!mobileShopOpen)}
              >
                Shop
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileShopOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileShopOpen ? "max-h-[60vh] overflow-y-auto" : "max-h-0"
                }`}
              >
                <div className="pl-4 mt-2 space-y-2 pb-2">
                  {shopData.map((item, index) => (
                    <div key={index}>
                      <button
                        className="w-full text-left py-1.5 flex justify-between items-center text-sm"
                        onClick={() =>
                          setMobileNestedOpen(
                            mobileNestedOpen === index ? null : index,
                          )
                        }
                      >
                        {item.name}
                        {item.children.length > 0 && (
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-150 ${
                              mobileNestedOpen === index ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          mobileNestedOpen === index ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="pl-4 pt-1 pb-2 space-y-1 text-sm text-gray-300">
                          {item.children.map((child, j) => (
                            <div
                              key={j}
                              className="py-0.5 hover:text-red-500 cursor-pointer transition-colors"
                            >
                              {child}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/contact-us"
              className="block py-2 border-t border-gray-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
