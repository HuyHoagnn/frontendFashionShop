import { Product } from "../types/types";

const ProductsCard = ({ product }: { product: Product }) => {
  const price = product.variants?.[0]?.price || 0;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 
    shadow-md hover:shadow-xl transition-all duration-300 
    hover:-translate-y-1 h-[400px] flex flex-col">
      
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        
        {/* Name */}
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[48px] group-hover:text-blue-600 transition">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price + Action */}
        <div className="flex items-center justify-between mt-3">
          
          {/* Price */}
          <p className="text-lg font-bold text-blue-600">
            ${price.toLocaleString()}
          </p>

          {/* Add to cart button */}
          <button className="text-sm px-3 py-1.5 bg-blue-600 text-white rounded-lg 
          opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 
          transition-all duration-300">
            Mua
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;