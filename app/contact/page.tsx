"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Liên hệ với chúng tôi</h1>
        <p className="text-gray-300">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        
        {/* LEFT - FORM */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Gửi tin nhắn
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              placeholder="Số điện thoại"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              placeholder="Nội dung"
              rows={5}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Gửi liên hệ
            </button>
          </form>
        </div>

        {/* RIGHT - INFO */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Thông tin liên hệ
          </h2>

          <div className="space-y-6 text-gray-600">
            <div className="flex items-start gap-4">
              <MapPin />
              <div>
                <p className="font-medium text-gray-800">Địa chỉ</p>
                <p>Thanh Hóa, Việt Nam</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone />
              <div>
                <p className="font-medium text-gray-800">Điện thoại</p>
                <p>0123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p>support@yourbrand.com</p>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-8">
            <iframe
              src="https://maps.google.com/maps?q=Thanh%20Hoa&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[300px] rounded-xl border"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}