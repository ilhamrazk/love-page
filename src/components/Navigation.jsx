import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Image, Clock, MessageSquare, Gift, Settings, Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'hero', label: 'Home', icon: Heart },
  { id: 'carousel', label: 'Memories', icon: Image },
  { id: 'photowall', label: 'Photo Wall', icon: Sparkles },
  { id: 'story', label: 'Our Story', icon: Clock },
  { id: 'littlethings', label: 'Little Things', icon: Heart },
  { id: 'letter', label: 'Love Letter', icon: MessageSquare },
  { id: 'words', label: 'Words For You', icon: BookOpen },
  { id: 'surprise', label: 'Surprise', icon: Gift },
  { id: 'final', label: 'Just Us', icon: Heart },
];

export default function Navigation({ onOpenEditModal }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Detect active section
      const scrollPosition = window.scrollY + 250;
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Floating Glassmorphism Navbar for Desktop */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 w-[94%] max-w-5xl rounded-full px-5 py-2.5 flex items-center justify-between ${
          isScrolled
            ? 'bg-[#FFFDF9]/90 backdrop-blur-md shadow-lg border border-[#E8DDD4]'
            : 'bg-[#FFFDF9]/60 backdrop-blur-sm border border-transparent'
        }`}
      >
        {/* Brand / Title */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 text-left group"
        >
          <span className="text-scrapbook-rose group-hover:scale-110 transition-transform">♡</span>
          <span className="font-serif font-bold text-sm sm:text-base tracking-wide text-scrapbook-brown">
            Our Little World
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                  isActive
                    ? 'text-scrapbook-rose font-semibold'
                    : 'text-scrapbook-brown/70 hover:text-scrapbook-brown hover:bg-scrapbook-blush/20'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-scrapbook-blush/30 rounded-full -z-10 border border-scrapbook-rose/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons: Edit Memories & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenEditModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#F6D9D8]/60 hover:bg-[#F6D9D8] text-scrapbook-brown rounded-full border border-scrapbook-rose/30 shadow-sm transition-all hover:scale-105 active:scale-95"
            title="Edit photos, captions, and text"
          >
            <Settings className="w-3.5 h-3.5 text-scrapbook-rose" />
            <span className="hidden sm:inline">Edit Memories</span>
            <span className="sm:hidden">Edit</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full text-scrapbook-brown hover:bg-scrapbook-blush/30 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 bg-[#FFFDF9]/95 backdrop-blur-md rounded-2xl shadow-2xl border border-[#E8DDD4] p-4 lg:hidden max-h-[75vh] overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-left text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-scrapbook-blush/40 text-scrapbook-rose font-bold'
                        : 'text-scrapbook-brown/80 hover:bg-stone-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-scrapbook-rose" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
