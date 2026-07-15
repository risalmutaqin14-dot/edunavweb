"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Logos, navItems } from "../data.js";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  onOpenMobileMenu?: () => void;
  navbarRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Navbar({ onOpenMobileMenu, navbarRef }: NavbarProps) {
  const btnRef = useRef(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  // Check if we're on a blog detail page
  const isBlogDetailPage = pathname?.startsWith("/blog/");

  // Ensure hydration completes before rendering dynamic content
  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
  };

  // Efek untuk mendeteksi scroll agar navbar bisa mengecil/menyesuaikan bayangan
  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollState);
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  // Set active section based on pathname
  useEffect(() => {
    if (isBlogDetailPage) {
      setActiveSection("blog");
    }
  }, [isBlogDetailPage]);

  // Efek untuk mendeteksi section aktif (only on landing page)
  useEffect(() => {
    if (isBlogDetailPage) return; // Skip scroll spy on blog detail page

    const handleScrollSpy = () => {
      const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
      const featuresEdunavSection = document.getElementById("features-edunav");
      const contactSection = document.getElementById("contact");
      const navbarHeight = navbarRef && navbarRef.current ? navbarRef.current.offsetHeight : 100;

      let currentSection = "home";
      let minDistance = Infinity;

      // Check navItems sections
      sections.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top - navbarHeight - 50; // 50px offset for better feel

        // Check if section is in viewport
        if (sectionTop <= 0 && rect.bottom > navbarHeight) {
          const distance = Math.abs(sectionTop);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section.id;
          }
        }
      });

      // Check features-edunav section (maps to features in navbar)
      if (featuresEdunavSection) {
        const rect = featuresEdunavSection.getBoundingClientRect();
        const sectionTop = rect.top - navbarHeight - 50;

        if (sectionTop <= 0 && rect.bottom > navbarHeight) {
          const distance = Math.abs(sectionTop);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = "features-edunav";
          }
        }
      }

      // Check contact section separately (maps to faq in navbar)
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const sectionTop = rect.top - navbarHeight - 50;

        if (sectionTop <= 0 && rect.bottom > navbarHeight) {
          const distance = Math.abs(sectionTop);
          if (distance < minDistance) {
            currentSection = "contact";
          }
        }
      }

      // If no section is in view, default to home
      if (window.scrollY < 100) {
        currentSection = "home";
      }

      // Map sections to navbar items
      if (currentSection === "features-edunav") {
        currentSection = "features";
      }
      if (currentSection === "contact") {
        currentSection = "faq";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    // Initial check
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [navbarRef, isBlogDetailPage]);

  // --- FUNGSI SCROLL ---
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // If on blog detail page, redirect to home with hash
    if (isBlogDetailPage) {
      router.push(`/#${targetId}`);
      return;
    }

    const element = document.getElementById(targetId);

    const scrollToElement = (el: HTMLElement | null) => {
      if (!el) return;
      const navbarHeight = navbarRef && navbarRef.current ? navbarRef.current.offsetHeight : 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };

    if (element) {
      scrollToElement(element);
      return;
    }

    window.location.hash = "";
    setTimeout(() => {
      const el2 = document.getElementById(targetId);
      scrollToElement(el2);
    }, 120);
  };

  return (
    <nav
      id="navbar"
      ref={navbarRef}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "pt-4" : "pt-6"
      }`}
    >
      {/* Container utama ala Dribbble: Floating Pill dengan Glassmorphism */}
      <div
        className={`mx-auto max-w-7xl px-5 transition-all duration-500 ease-in-out ${
          scrolled ? "w-[95%] md:w-[90%]" : "w-[98%] md:w-[95%]"
        }`}
      >
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] px-6 py-3 md:py-4">

          {/* KIRI: Logo */}
          <a
            href={isBlogDetailPage ? "/" : "#home"}
            onClick={(e) => {
              if (isBlogDetailPage) {
                e.preventDefault();
                router.push("/");
              } else {
                handleScroll(e, "home");
              }
            }}
            className="relative z-10 flex items-center transition-transform hover:scale-105"
          >
            <div className="relative w-28 h-8 md:w-36 md:h-10">
              <Image
                src={Logos.edunav}
                alt="Logo Edunav"
                fill
                sizes="(max-width: 768px) 112px 144px"
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* TENGAH: Desktop Menu (Minimalist styling) */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {mounted && navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className={`relative text-sm font-semibold transition-colors group min-w-[3rem] text-center ${
                    isActive
                      ? "text-[#0369a1]"
                      : "text-gray-600 hover:text-[#0369a1]"
                  }`}
                >
                  {t(`navbar.${item.id}`)}
                  {/* Dribbble style underline animation - active state */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#0369a1] transition-all duration-300 ease-out rounded-full ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* KANAN: Action Buttons */}
          <div className="flex items-center gap-4 relative z-10">
            {/* 1. Language Dropdown */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-3 py-2 text-[13px] font-bold text-gray-600 hover:text-gray-900 bg-gray-50/50 hover:bg-gray-100 rounded-xl transition-all border border-transparent hover:border-gray-200"
                aria-label="Select language"
              >
                <span className="relative w-5 h-5 overflow-hidden rounded-full">
                  <Image
                    src={mounted && i18n.language === "en" ? Logos.unitedkingdom : Logos.indonesia}
                    alt={mounted && i18n.language === "en" ? "English" : "Indonesia"}
                    fill
                    sizes="20px"
                    className="object-cover"
                  />
                </span>
                <span className="tracking-wide">{mounted ? (i18n.language?.toUpperCase() || "ID") : "ID"}</span>
              </button>

              {/* Language Menu Dropdown */}
              {isLanguageOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 transform origin-top transition-all">
                  <button
                    onClick={() => changeLanguage("id")}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-[13px] font-bold transition-all ${
                      mounted && i18n.language === "id"
                        ? "bg-blue-50/50 text-[#0369a1]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className="relative w-5 h-5 overflow-hidden rounded-full">
                      <Image src={Logos.indonesia} alt="Indonesia" fill sizes="20px" className="object-cover" />
                    </span>
                    Indonesia
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-[13px] font-bold transition-all ${
                      mounted && i18n.language === "en"
                        ? "bg-blue-50/50 text-[#0369a1]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className="relative w-5 h-5 overflow-hidden rounded-full">
                      <Image src={Logos.unitedkingdom} alt="English" fill sizes="20px" className="object-cover" />
                    </span>
                    English
                  </button>
                </div>
              )}
            </div>

            {/* 2. Login Button */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://latihan.id/login"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-white text-slate-900 text-[13px] font-bold rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 transition-all duration-300"
            >
              Login
            </a>

            {/* 3. CTA Button (Dribbble style: soft shadow, gradient, rounded pill) */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I+want+to+ask+about+zerOne.id+service&type=phone_number&app_absent=0"
              className="hidden md:flex items-center px-6 py-2.5 bg-gradient-to-r from-[#0696a8] to-[#0891b2] text-white text-[13px] font-bold rounded-full shadow-[0_4px_15px_rgba(6,150,168,0.3)] hover:shadow-[0_6px_20px_rgba(6,150,168,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {mounted ? t("navbar.btn_demo") : "Demo Gratis"}
            </a>

            {/* 3. Mobile Menu Toggle (Modern Hamburger) */}
            <button
              ref={btnRef}
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (onOpenMobileMenu) onOpenMobileMenu();
              }}
              className="lg:hidden relative flex flex-col items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-5 h-[2px] bg-gray-800 transition-all duration-300 rounded-full ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : "-translate-y-1"}`} />
              <span className={`block w-5 h-[2px] bg-gray-800 transition-all duration-300 rounded-full my-0.5 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block w-5 h-[2px] bg-gray-800 transition-all duration-300 rounded-full ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : "translate-y-1"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Slide down & floating card) */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 px-5 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible translate-y-2" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-5 flex flex-col gap-2">
          {mounted && navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                className={`py-3 px-5 text-sm font-semibold rounded-xl transition-all ${
                  isActive
                    ? "text-[#0369a1] bg-blue-50/50"
                    : "text-gray-700 hover:text-[#0369a1] hover:bg-blue-50/50"
                }`}
                href={`#${item.id}`}
                onClick={(e) => {
                  handleScroll(e, item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {t(`navbar.${item.id}`)}
              </a>
            );
          })}

          <hr className="my-2 border-gray-100" />

          {/* Mobile Language & CTA */}
          <div className="flex items-center justify-between px-5 py-2">
            <div className="flex gap-3">
              <button
                onClick={() => { changeLanguage("id"); setIsMobileMenuOpen(false); }}
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all ${mounted && i18n.language === "id" ? "border-[#0369a1] shadow-md" : "border-transparent opacity-60"}`}
              >
                <div className="relative w-6 h-6 overflow-hidden rounded-full">
                  <Image src={Logos.indonesia} alt="Indonesia" fill sizes="24px" className="object-cover" />
                </div>
              </button>
              <button
                onClick={() => { changeLanguage("en"); setIsMobileMenuOpen(false); }}
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all ${mounted && i18n.language === "en" ? "border-[#0369a1] shadow-md" : "border-transparent opacity-60"}`}
              >
                <div className="relative w-6 h-6 overflow-hidden rounded-full">
                  <Image src={Logos.unitedkingdom} alt="English" fill sizes="24px" className="object-cover" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
