// Products.jsx
import { ProductItem } from "./ProductItem";
import { productList } from "src/utils/products.js";

// const productList = [
//   {
//     title: "Engagement Ring 1",
//     price: "$101.00 USD",
//     color: "yellowGold",
//     images: {
//       yellowGold: product1Yellow,
//       roseGold: product1Rose,
//       whiteGold: product1White,
//     },
//   },
//   {
//     title: "Engagement Ring 2",
//     price: "$101.00 USD",
//     color: "yellowGold",
//     images: {
//       yellowGold: product2Yellow,
//       roseGold: product2Rose,
//       whiteGold: product2White,
//     },
//   },
//   {
//     product: product2Yellow,
//     title: "Engagement Ring 1",
//     price: "$101.00 USD",
//     yellowGoldImage: product2Yellow,
//     roseGoldImage: product2Rose,
//     whiteGoldImage: product2White,
//   },
//   {
//     product: product3Yellow,
//     title: "Engagement Ring 1",
//     price: "$101.00 USD",
//     yellowGoldImage: product3Yellow,
//     roseGoldImage: product3Rose,
//     whiteGoldImage: product3White,
//   },
//   {
//     product: product4Yellow,
//     title: "Engagement Ring 1",
//     price: "$101.00 USD",
//     yellowGoldImage: product4Yellow,
//     roseGoldImage: product4Rose,
//     whiteGoldImage: product4White,
//   },
// ];
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
