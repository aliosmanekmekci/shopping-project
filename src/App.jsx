import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { productList } from "./utils/products";

function App() {
  return (
    <div className="container mx-auto mt-8">
      <Header />
      <ProductList products={productList} />
    </div>
  );
}

export default App;
