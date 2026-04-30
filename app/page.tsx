import ProductsCard from "./components/productsCard";
import { Product } from "./types/types";
import BannerSlider from "./components/bannerSlide";

export default async function Home() {
  const products: Product[] = await fetch(
    "https://backendfashionshop-production.up.railway.app/api/products",
    {
      cache: "no-store", // tránh cache khi dev
    }
  ).then((res) => res.json());

  return (
    <main className="w-full">
      
      {/* BANNER */}
      <BannerSlider />

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        
        {/* TITLE */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Sản phẩm nổi bật
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Khám phá bộ sưu tập mới nhất
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
