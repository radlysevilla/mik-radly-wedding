'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-romana text-[#3a302e]">
              Wedding
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#3a302e] hover:text-[#8b4513] transition-colors font-romana">
              Home
            </Link>
            <Link href="/faqs" className="text-[#3a302e] hover:text-[#8b4513] transition-colors font-romana">
              FAQs
            </Link>
            <Link href="/rsvp" className="text-[#3a302e] hover:text-[#8b4513] transition-colors font-romana">
              RSVP
            </Link>
            <Link href="/gallery" className="text-[#3a302e] hover:text-[#8b4513] transition-colors font-romana">
              Gallery
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#3a302e] hover:text-[#8b4513] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 text-[#3a302e] hover:text-[#8b4513] transition-colors font-romana"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/faqs"
                className="block px-3 py-2 text-[#3a302e] hover:text-[#8b4513] transition-colors font-romana"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>
              <Link
                href="/rsvp"
                className="block px-3 py-2 text-[#3a302e] hover:text-[#8b4513] transition-colors font-romana"
                onClick={() => setIsOpen(false)}
              >
                RSVP
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 text-[#3a302e] hover:text-[#8b4513] transition-colors font-romana"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 