import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { productList } from "./utils/products";

function App() {
  return (
    <div className="container mx-auto mt-4 md:mt-10 lg:mt-15">
      <Header />
      <ProductList products={productList} />
      <button className="mx-auto justify-center flex text-gray-800 font-light py-2 px-4 rounded mt-16 font-custom2 items-center opacity-50 cursor-not-allowed border-2">
        View all Products
      </button>
    </div>
  );
}

export default App;
