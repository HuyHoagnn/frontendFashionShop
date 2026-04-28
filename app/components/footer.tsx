"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Cột 1 - Giới thiệu */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">MyShop</h2>
          <p className="text-sm leading-relaxed">
            MyShop là nền tảng mua sắm thời trang với nhiều sản phẩm chất lượng,
            giá cả hợp lý và dịch vụ khách hàng tận tâm.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-4">
            {/* Facebook */}
            <svg className="w-5 h-5 cursor-pointer hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.63 9.87v-6.99h-2.8V12h2.8V9.8c0-2.76 1.64-4.28 4.14-4.28 1.2 0 2.46.21 2.46.21v2.7h-1.39c-1.37 0-1.8.85-1.8 1.72V12h3.06l-.49 2.88h-2.57v6.99A10 10 0 0022 12z"/>
            </svg>

            {/* Instagram */}
            <svg className="w-5 h-5 cursor-pointer hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 
              0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5a5 5 0 
              110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 
              11-2.5 0 1.25 1.25 0 012.5 0z"/>
            </svg>

            {/* Youtube */}
            <svg className="w-5 h-5 cursor-pointer hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.7 5 
              12 5 12 5h0s-4.7 0-7.1.1c-.4.1-1.2.1-1.9.9-.6.6-.8 
              2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 
              2c.7.8 1.6.8 2 .9 1.5.1 6.9.1 6.9.1s4.7 0 
              7.1-.1c.4-.1 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22 
              9.6 21.8 8 21.8 8zM10 14.5v-5l5 2.5-5 2.5z"/>
            </svg>
          </div>
        </div>

        {/* Cột 2 - Chính sách */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Chính sách</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Chính sách bảo mật</Link></li>
            <li><Link href="#">Chính sách đổi trả</Link></li>
            <li><Link href="#">Chính sách vận chuyển</Link></li>
            <li><Link href="#">Điều khoản sử dụng</Link></li>
          </ul>
        </div>

        {/* Cột 3 - Hỗ trợ */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Hỗ trợ</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Trung tâm trợ giúp</Link></li>
            <li><Link href="#">Hướng dẫn mua hàng</Link></li>
            <li><Link href="#">Thanh toán</Link></li>
            <li><Link href="#">Liên hệ</Link></li>
          </ul>
        </div>

        {/* Cột 4 - Liên hệ */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Liên hệ</h2>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              {/* Location icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z"/>
                <circle cx="12" cy="11" r="2"/>
              </svg>
              Thanh Hóa, Việt Nam
            </li>

            <li className="flex items-center gap-2">
              {/* Phone */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92V19a2 2 0 01-2.18 2 
                19.79 19.79 0 01-8.63-3.07 19.5 
                19.5 0 01-6-6A19.79 19.79 0 
                013 4.18 2 2 0 015 2h2.09a2 2 0 
                012 1.72c.12.9.37 1.78.72 2.61a2 
                2 0 01-.45 2.11L8.09 9.91a16 
                16 0 006 6l1.47-1.27a2 2 0 
                012.11-.45c.83.35 1.71.6 
                2.61.72A2 2 0 0122 16.92z"/>
              </svg>
              0123 456 789
            </li>

            <li className="flex items-center gap-2">
              {/* Mail */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              support@myshop.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 MyShop. All rights reserved.
      </div>
    </footer>
  );
}