import { Product } from "../types/types";

const ProductsCard = ({ product }: { product: Product }) => {
  const price = product.variants?.[0]?.price || 0;

  return (
    <div className="group bg-white cursor-pointer">
      
      {/* IMAGE */}
      <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="pt-4 space-y-1">
        
        {/* Brand */}
        <p className="text-base font-semibold text-gray-900">
          {product.category?.name || "Brand"}
        </p>

        {/* Product name */}
        <p className="text-gray-500 text-sm line-clamp-1">
          {product.name}
        </p>

        {/* Price */}
        <p className="text-lg font-semibold text-gray-900 pt-1">
          {price.toLocaleString()}đ
        </p>
      </div>
    </div>
  );
};

export default ProductsCard;