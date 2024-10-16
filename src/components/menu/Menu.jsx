"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import "./Menu.css";
import { useEffect, useRef, useState } from "react";
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];
const Menu = () => {
  const container = useRef();
  const tl = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 0.7,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: "power1.inOut",
      })
      .to(".nav-items", {
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        opacity: 1,
        ease: "power1.inOut",
      });
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div ref={container}>
      <div className="fixed top-0 left-0 flex items-start justify-between w-screen h-screen p-10 text-3xl text-white">
        <h1>Navbar</h1>
        <button onClick={() => toggleMenu()}>Menu</button>
      </div>
      <div className=" fixed top-0 left-0 menu-overlay bg-[#C4F945]  flex flex-col  gap-5 font-medium justify-center items-center w-screen h-[96vh]">
        <div className="fixed top-0 left-0 flex items-center justify-between w-screen p-10 text-3xl ">
          <h1>Navbar</h1>
          <button onClick={() => toggleMenu()}>Close</button>
        </div>
        {navItems.map((item, i) => (
          <Link
            onClick={() => toggleMenu()}
            className="text-6xl translate-y-20 opacity-0 nav-items"
            href={item.path}
            key={i}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
