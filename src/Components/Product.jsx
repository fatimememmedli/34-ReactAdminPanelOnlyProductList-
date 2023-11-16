import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import "../../src/PostInput.css";
import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
function Product({ product, products, setProducts }) {
  const [edit, setEdit] = useState(null);
  return (
    <ChakraProvider>
      <Tr>
        <Td>{product.id}</Td>
        <Td>{product.name}</Td>
        <Td isNumeric>{product.unitPrice}</Td>
        <Td isNumeric>{product.unitsInStock}</Td>
        <Td isNumeric>
          <Button
            onClick={() => {
              setEdit(product);
            }}
            colorScheme="purple"
          >
            Edit
          </Button>
        </Td>
        <Td isNumeric>
          <Button
            colorScheme="red"
            data-id={product.id}
            onClick={(e) => {
              axios.delete(
                "https://northwind.vercel.app/api/products/" +
                  e.target.getAttribute("data-id")
              );
              let arr = products.filter(
                (elem) => elem.id != e.target.getAttribute("data-id")
              );
              setProducts([...arr]);
            }}
          >
            Delete
          </Button>
        </Td>
      </Tr>
      <div className="edit-btn">
        {edit ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              axios.patch(
                `https://northwind.vercel.app/api/products/${product.id}`,
                edit
              );
              let updated = products.find((x) => x.id == product.id);
              updated.name = edit.name;
              updated.price = edit.price;
              setProducts(updated);
              setEdit(null);
            }}
            action=""
          >
            <Input
              onChange={(e) => {
                setEdit({ ...edit, name: e.target.value });
              }}
              value={edit.name}
              placeholder="name"
              size="md"
            />
            <Input
              onChange={(e) => {
                setEdit({ ...edit, unitPrice: e.target.value });
              }}
              value={edit.unitPrice}
              placeholder="price"
              size="md"
            />
            <Button type="submit" colorScheme="gray">
              Edit
            </Button>
            <Button
              onClick={() => {
                setEdit(null);
              }}
              colorScheme="gray"
            >
              Cancel
            </Button>
          </form>
        ) : null}
      </div>
    </ChakraProvider>
  );
}

export default Product;
