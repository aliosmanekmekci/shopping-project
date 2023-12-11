import classNames from "classnames/bind";
import styles from "./styles.module.scss";

let cx = classNames.bind(styles);

const CartIcon = () => {
  return (
    <div className={cx("cart-icon")}>
      <img
        src="./src/assets/logos/cart-icon.svg"
        className="w-4 h-4 mr-6 cursor-pointer"
        alt="Shopping Cart Icon"
      />
      <span className={cx("cart-icon__search-icon")}>0</span>
    </div>
  );
};

export default CartIcon;
