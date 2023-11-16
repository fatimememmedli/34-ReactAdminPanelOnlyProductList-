import React from "react";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import "../../src/PostInput.css";
import axios from "axios";
function PostButton({ products, setProducts }) {
  const [postName, setPostName] = useState("");
  const [postPrice, setPostPrice] = useState("");
  const [postStock, setPostStock] = useState("");
  const [post, SetPost] = useState(null);
  return (
    <ChakraProvider>
      <Button
        onClick={() => {
          SetPost(true);
          let obj = {
            name: postName,
            unitPrice: postPrice,
            unitsInStock: postStock,
          };
          axios
            .post("https://northwind.vercel.app/api/products", obj)
            .then((res) => {
              setProducts([...products, res.data]);
            });
          setPostName("");
          setPostPrice("");
          setPostStock("");
        }}
        colorScheme="blue"
      >
        Add Product
      </Button>
      {post ? (
        <div className="post-buttons">
          <Input
            value={postName}
            onChange={(e) => {
              // console.log(e.target.value);
              setPostName(e.target.value);
            }}
            placeholder="name"
            size="md"
          />
          <Input
            value={postPrice}
            onChange={(e) => {
              setPostPrice(e.target.value);
            }}
            placeholder="price"
            size="md"
            type="number"
          />
          <Input
            value={postStock}
            onChange={(e) => {
              setPostStock(e.target.value);
            }}
            type="number"
            placeholder="stock"
            size="md"
          />
          <Button
            onClick={() => {
              let obj = {
                name: postName,
                unitPrice: postPrice,
                unitsInStock: postStock,
              };
              axios
                .post("https://northwind.vercel.app/api/products", obj)
                .then((res) => {
                  setProducts([...products, res.data]);
                });
              setPostName("");
              setPostPrice("");
              setPostStock("");
            }}
            colorScheme="blue"
          >
            Add Product
          </Button>
          <Button
            onClick={() => {
              SetPost(null);
            }}
            colorScheme="gray"
          >
            Cancel
          </Button>
        </div>
      ) : null}
    </ChakraProvider>
  );
}

export default PostButton;
