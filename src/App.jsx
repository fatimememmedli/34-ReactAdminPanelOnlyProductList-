import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Components/Products";
import Product from "./Components/Product";
import { ChakraProvider } from "@chakra-ui/react";
import PostButton from "./Components/PostButton";
import "../src/App.css";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products/").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <div className="Buttons">
        <PostButton products={products} setProducts={setProducts} />
      </div>
      <Products products={products} setProducts={setProducts} />
    </>
  );
}

export default App;
