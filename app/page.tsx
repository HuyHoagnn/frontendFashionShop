import Image from "next/image";
import ProductsCard from "./components/productsCard";
import { Product } from "./types/types";

export default async function Home() {
  const products : Product[] = await fetch("https://backendfashionshop-production.up.railway.app/api/products").then((res) => res.json());
  console.log(products);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Đây là trang chủ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
