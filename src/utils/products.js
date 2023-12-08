// Görsel URL'leri burada import edin veya tanımlayın
import product1Yellow from "../assets/Products/EG009/EG009-Y.jpg";
import product1Rose from "../assets/Products/EG009/EG009-R.jpg";
import product1White from "../assets/Products/EG009/EG009-W.jpg";
// Diğer ürünler için de benzer şekilde...
import product2Yellow from "../assets/Products/EG012/EG012-Y.jpg";
import product2Rose from "../assets/Products/EG012/EG012-R.jpg";
import product2White from "../assets/Products/EG012/EG012-W.jpg";

import product3Yellow from "../assets/Products/EG020/EG020-200P-Y.jpg";
import product3Rose from "../assets/Products/EG020/EG020-200P-R.jpg";
import product3White from "../assets/Products/EG020/EG020-200P-W.jpg";

import product4Yellow from "../assets/Products/EG022/EG022-100P-Y.jpg";
import product4Rose from "../assets/Products/EG022/EG022-100P-R.jpg";
import product4White from "../assets/Products/EG022/EG022-100P-W.jpg";

const productList = [
  {
    title: "Engagement Ring 1",
    price: "$101.00 USD",
    color: "yellowGold",
    images: {
      yellowGold: product1Yellow,
      roseGold: product1Rose,
      whiteGold: product1White,
    },
  },
  {
    title: "Engagement Ring 2",
    price: "$101.00 USD",
    color: "yellowGold",
    images: {
      yellowGold: product2Yellow,
      roseGold: product2Rose,
      whiteGold: product2White,
    },
  },
  {
    title: "Engagement Ring 3",
    price: "$101.00 USD",
    color: "yellowGold",
    images: {
      yellowGold: product3Yellow,
      roseGold: product3Rose,
      whiteGold: product3White,
    },
  },
  {
    title: "Engagement Ring 4",
    price: "$101.00 USD",
    color: "yellowGold",
    images: {
      yellowGold: product4Yellow,
      roseGold: product4Rose,
      whiteGold: product4White,
    },
  },
];

export { productList };
