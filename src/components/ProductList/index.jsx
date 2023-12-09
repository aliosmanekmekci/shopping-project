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
    spaceBetween={20}
    slidesPerView={4}
    navigation
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log("slide change")}
    breakpoints={{
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
      },
      // when window width is >= 1920px
      1920: {
        slidesPerView: 4,
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
