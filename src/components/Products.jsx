// Products.jsx
import { ProductItem } from "./ProductItem";
import { productList } from "src/utils/products.js";

const Products = () => (
  <div className="grid grid-cols-4 gap-10 mr-6">
    {productList.map((p, i) => (
      <ProductItem
        key={i}
        color={p.color}
        title={p.title}
        price={p.price}
        images={p.images}
      />
    ))}
  </div>
);

export default Products;
