import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);
const ProductItem = ({
  // white, rose, yellow
  color,
  title,
  price,
  images,
}) => {
  const [selectedColor, setSelectedColor] = useState(color);

  return (
    <div className={cx("product-item")}>
      <span className={cx("product-item__image")}>
        <img
          // className={cx("product-item__image")}
          src={images[selectedColor]}
          alt={title}
        />
      </span>
      <div className={cx("product-item__content")}>
        <h2>{title}</h2>
        <p>{price}</p>
        <div className={cx("product-item__buttons")}>
          <button
            className={cx("color-button", "color-button__yellow")}
            onClick={() => setSelectedColor("yellowGold")}
          ></button>
          <button
            className={cx("color-button", "color-button__roseGold")}
            onClick={() => setSelectedColor("roseGold")}
          ></button>
          <button
            className={cx("color-button", "color-button__whiteGold")}
            onClick={() => setSelectedColor("whiteGold")}
          ></button>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  images: PropTypes.object,
};

export default ProductItem;
