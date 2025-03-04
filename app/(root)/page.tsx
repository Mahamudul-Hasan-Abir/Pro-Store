import ProductList from "@/components/product/ProductList";

import { getLatestProducts } from "@/lib/actions/product.action";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div className="wrapper ">
      <ProductList
        data={latestProducts}
        title="Newest Arrivels"
        limit={4}
      ></ProductList>
    </div>
  );
};

export default HomePage;
