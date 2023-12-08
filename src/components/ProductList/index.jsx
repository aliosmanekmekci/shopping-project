// Products.jsx
import ProductItem from "../ProductItem";
import PropTypes from "prop-types";

const ProductList = (props) => (
  <div className="grid grid-cols-4 gap-10 mr-6">
    {props.products.map((p, i) => (
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

ProductList.propTypes = {
  products: PropTypes.array,
};
export default ProductList;
