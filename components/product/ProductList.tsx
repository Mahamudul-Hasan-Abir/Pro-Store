import { TProduct } from "@/types";
import ProductCard from "./ProductCard";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: TProduct[];
  title?: string;
  limit: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h1 className="h2-bold mb-4">{title}</h1>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((product: TProduct) => (
            <ProductCard key={product.slug} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <div>
          <p>No Products Found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
