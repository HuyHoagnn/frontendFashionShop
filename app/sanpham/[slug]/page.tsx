"use client";
import { useEffect, useState } from "react";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [slug, setSlug] = useState<string | null>(null);
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };
    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        const [productRes, relatedRes] = await Promise.all([
          fetch(
            `https://backendfashionshop-production.up.railway.app/api/products/${slug}`
          ),
          fetch(
            `https://backendfashionshop-production.up.railway.app/api/productsrelated/${slug}`
          ),
        ]);

        const productData = await productRes.json();
        const relatedData = await relatedRes.json();

        setProduct(productData);
        setSelectedVariant(productData.variants[0]);
        setRelatedProducts(relatedData);
      };

      fetchData();
    }
  }, [slug]);

  const handleVariantChange = (variantId: string) => {
    const variant = product.variants.find((v: any) => v.id === variantId);
    if (variant) {
      setSelectedVariant(variant);
      setQuantity(1);
    }
  };

  const increaseQty = () => {
    if (quantity < selectedVariant.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      productId: product.id,
      variantId: selectedVariant.id,
      quantity,
    };

    console.log("Cart item:", cartItem);
  };

  if (!slug || !product || !selectedVariant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        {/* IMAGE */}
        <div className="w-full md:w-1/2 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* INFO */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* SIZE */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Chọn Size</h2>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((variant: any) => (
                <button
                  key={variant.id}
                  onClick={() => handleVariantChange(variant.id)}
                  disabled={variant.stock === 0}
                  className={`px-4 py-2 border rounded-lg transition
                    ${
                      selectedVariant.id === variant.id
                        ? "bg-black text-white border-black"
                        : "bg-white"
                    }
                    ${
                      variant.stock === 0
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:border-black"
                    }
                  `}
                >
                  {variant.size}
                </button>
              ))}
            </div>
          </div>

          {/* VARIANT INFO */}
          <div className="border rounded-lg p-4 mb-6">
            <p>Size: {selectedVariant.size}</p>
            <p>Màu: {selectedVariant.color}</p>
            <p className="text-xl font-bold text-red-500">
              {selectedVariant.price.toLocaleString()}₫
            </p>
            <p className="text-sm text-gray-500">
              {selectedVariant.stock > 0
                ? `Còn ${selectedVariant.stock} sản phẩm`
                : "Hết hàng"}
            </p>
          </div>

          {/* QUANTITY */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Số lượng</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 border rounded-lg"
              >
                -
              </button>

              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.min(
                      selectedVariant.stock,
                      Math.max(1, Number(e.target.value))
                    )
                  )
                }
                className="w-16 text-center border rounded-lg py-1"
              />

              <button
                onClick={increaseQty}
                className="px-3 py-1 border rounded-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleAddToCart}
            disabled={selectedVariant.stock === 0}
            className={`w-full py-3 rounded-lg text-white font-semibold transition
              ${
                selectedVariant.stock === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:bg-gray-800"
              }`}
          >
            {selectedVariant.stock === 0
              ? "Hết hàng"
              : "Thêm vào giỏ hàng"}
          </button>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Sản phẩm liên quan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((item: any) => {
            const price = item.variants?.[0]?.price || 0;

            return (
              <div
                key={item.id}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-[200px] object-cover rounded-md"
                />

                <h3 className="text-lg font-semibold mt-3 line-clamp-2">
                  {item.name}
                </h3>

                <p className="text-red-500 font-bold mt-2">
                  {price.toLocaleString()}₫
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}