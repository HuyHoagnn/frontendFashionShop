"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            C4L
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-blue-500">Trang chủ</Link>
            <Link href="/products" className="hover:text-blue-500">Sản phẩm</Link>
            <Link href="/about" className="hover:text-blue-500">Giới thiệu</Link>
            <Link href="/contact" className="hover:text-blue-500">Liên hệ</Link>
          </nav>

          {/* Search + Icons */}
          <div className="hidden md:flex items-center gap-4">

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="border rounded-full pl-10 pr-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {/* Search Icon */}
              <svg
                className="absolute left-3 top-1.5 w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            {/* Cart Icon */}
            <svg
              className="w-5 h-5 cursor-pointer hover:text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>

            {/* User Icon */}
            <svg
              className="w-5 h-5 cursor-pointer hover:text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M20 21a8 8 0 10-16 0" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          {/* Mobile button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Menu icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t px-4 pb-4">
          
          <div className="flex flex-col gap-3 mt-3">
            <Link href="/" onClick={() => setOpen(false)}>Trang chủ</Link>
            <Link href="/products" onClick={() => setOpen(false)}>Sản phẩm</Link>
            <Link href="/about" onClick={() => setOpen(false)}>Giới thiệu</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Liên hệ</Link>
          </div>

          {/* Search Mobile */}
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full border rounded-full pl-10 pr-4 py-2 text-sm"
            />
            <svg
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {/* Icons Mobile */}
          <div className="flex gap-4 mt-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>

            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21a8 8 0 10-16 0" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      )}
    </header>
  );
}