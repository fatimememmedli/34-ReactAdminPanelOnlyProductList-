import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
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
import Product from "./Product";
function Products({ products, setProducts }) {
  return (
    <ChakraProvider>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>NAME</Th>
              <Th isNumeric>PRICE</Th>
              <Th isNumeric>STOCK</Th>
              <Th isNumeric>EDIT</Th>
              <Th isNumeric>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products &&
              products.map((product, i) => {
                return (
                  <Product
                    product={product}
                    products={products}
                    setProducts={setProducts}
                    key={i}
                  />
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </ChakraProvider>
  );
}

export default Products;
