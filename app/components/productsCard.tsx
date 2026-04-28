import { Product } from "../types/types";

const ProductsCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.thumbnail} alt={product.name} className="w-full h-auto rounded-md" />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-bold text-blue-500">${product.variants[0].price.toLocaleString()}</p>
    </div>
  );
};

export default ProductsCard;