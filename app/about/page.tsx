import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative w-full h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
          alt="about-banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-white text-4xl md:text-5xl font-bold">
            Giới thiệu thương hiệu
          </h3>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 leading-8">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6">
          ChangeForLife là thương hiệu của nước nào?
        </h2>

        <p className="mb-4">
          <strong>ChangeForLife</strong> là thương hiệu thời trang được sáng
          lập tại Việt Nam, hướng đến phong cách hiện đại, tinh tế và phù hợp
          với người Việt. Ngay từ khi ra mắt, thương hiệu đã định vị ở phân khúc
          trung – cao cấp với mục tiêu mang đến trải nghiệm tốt nhất cho khách
          hàng.
        </p>

        <p className="mb-4">
          Không chỉ đơn thuần là thời trang, ChangeForLife còn đại diện cho
          phong cách sống, sự tự tin và cá tính của người mặc.
        </p>

        {/* Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Hành trình phát triển
        </h2>

        <p className="mb-4">
          Bắt đầu từ một thương hiệu nhỏ, ChangeForLife đã từng bước khẳng
          định vị thế của mình trên thị trường thời trang Việt Nam.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Năm thành lập: 2026</li>
          <li>Khởi đầu với các sản phẩm cơ bản</li>
          <li>Mở rộng hệ thống cửa hàng trên toàn quốc</li>
          <li>Phát triển mạnh mẽ kênh bán hàng online</li>
        </ul>

        {/* Image */}
        <div className="my-8">
          <Image
            src="https://images.unsplash.com/photo-1445205170230-053b83016050"
            alt="fashion"
            width={800}
            height={500}
            className="rounded-xl"
          />
        </div>

        {/* Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Triết lý thương hiệu
        </h2>

        <p className="mb-4 italic">
          “[Slogan của bạn]”
        </p>

        <p className="mb-4">
          ChangeForLife luôn đặt khách hàng làm trung tâm, tập trung vào ba
          yếu tố cốt lõi:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Chất lượng sản phẩm cao cấp</li>
          <li>Thiết kế hiện đại, phù hợp xu hướng</li>
          <li>Dịch vụ tận tâm, chuyên nghiệp</li>
        </ul>

        {/* Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Điều làm nên sự khác biệt
        </h2>

        <div className="space-y-4">
          <p>
            <strong>Chất liệu:</strong> Sử dụng các loại vải cao cấp như cotton,
            linen mang lại sự thoải mái.
          </p>
          <p>
            <strong>Thiết kế:</strong> Tối giản nhưng tinh tế, dễ phối đồ.
          </p>
          <p>
            <strong>Công nghệ:</strong> Ứng dụng kỹ thuật may hiện đại giúp sản
            phẩm bền hơn.
          </p>
          <p>
            <strong>Giá trị:</strong> Cân bằng giữa chất lượng và giá thành.
          </p>
        </div>

        {/* Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Danh mục sản phẩm
        </h2>

        <ul className="grid grid-cols-2 gap-2 mb-6">
          <li>Áo sơ mi</li>
          <li>Áo thun / Polo</li>
          <li>Quần dài / Quần short</li>
          <li>Áo khoác</li>
          <li>Phụ kiện thời trang</li>
        </ul>

        {/* Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Tầm nhìn & Sứ mệnh
        </h2>

        <p className="mb-4">
          <strong>Tầm nhìn:</strong> Trở thành thương hiệu thời trang hàng đầu
          tại Việt Nam và vươn ra quốc tế.
        </p>

        <p className="mb-4">
          <strong>Sứ mệnh:</strong> Mang đến giải pháp thời trang giúp khách hàng
          tự tin thể hiện phong cách cá nhân.
        </p>

        {/* Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Cam kết
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Sản phẩm chất lượng cao</li>
          <li>Thiết kế luôn đổi mới</li>
          <li>Dịch vụ tận tâm</li>
          <li>Phát triển bền vững</li>
        </ul>

        {/* Conclusion */}
        <p className="text-lg font-medium">
          ChangeForLife không chỉ là thời trang – đó là phong cách sống. Chúng tôi cam kết mang đến những sản phẩm chất lượng, thiết kế tinh tế và dịch vụ tận tâm để khách hàng luôn tự tin và hài lòng.
        </p>
      </section>
    </main>
  );
}