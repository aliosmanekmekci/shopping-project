// Products.jsx
import ProductItem from "../ProductItem";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";

const ProductList = (props) => (
  <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    spaceBetween={20} // Default spacing
    slidesPerView={4} // Default number of slides per view
    className="external-buttons"
    navigation
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log("slide change")}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }}
  >
    {props.products.map((p, i) => (
      <SwiperSlide key={i}>
        <ProductItem
          color={p.color}
          title={p.title}
          price={p.price}
          images={p.images}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
