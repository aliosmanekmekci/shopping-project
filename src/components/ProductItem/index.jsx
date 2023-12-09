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
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedColorName, setSelectedColorName] = useState("");

  return (
    <div className={cx("product-item")}>
      <span className={cx("product-item__image")}>
        <img src={images[selectedColor]} alt={title} />
      </span>
      <div className={cx("product-item__content")}>
        <div className={cx("product-item__title")}>
          <h2>{title}</h2>
          <p>{price}</p>
        </div>
        <div className={cx("product-item__buttons")}>
          <button
            className={cx("color-button", "color-button__yellow", {
              "selected-button": selectedButton === "yellowGold",
            })}
            onClick={() => {
              setSelectedColor("yellowGold");
              setSelectedButton("yellowGold");
              setSelectedColorName("Yellow Gold");
            }}
          ></button>
          <button
            className={cx("color-button", "color-button__roseGold", {
              "selected-button": selectedButton === "roseGold",
            })}
            onClick={() => {
              setSelectedColor("roseGold");
              setSelectedButton("roseGold");
              setSelectedColorName("Rose Gold");
            }}
          ></button>
          <button
            className={cx("color-button", "color-button__whiteGold", {
              "selected-button": selectedButton === "whiteGold",
            })}
            onClick={() => {
              setSelectedColor("whiteGold");
              setSelectedButton("whiteGold");
              setSelectedColorName("White Gold");
            }}
          ></button>
        </div>
        <p className={cx("product-item__selected_color_name")}>
          {selectedColorName}
        </p>
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
