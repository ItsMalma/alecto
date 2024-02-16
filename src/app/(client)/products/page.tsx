"use client";

import { ProductCard } from "@/components/ProductCard";
import {
  Container,
  Divider,
  Flex,
  Group,
  Select,
  SimpleGrid,
  TextInput,
} from "@mantine/core";

export default function ClientProductsPage() {
  return (
    <Container w="100%" style={{ flexGrow: 1 }} py="md">
      <Flex direction="column">
        <Group pos="sticky">
          <Select
            style={{ flexBasis: "20%" }}
            placeholder="Select Category"
            defaultValue="all"
            data={[
              { value: "all", label: "All" },
              { value: "food", label: "Food" },
              { value: "technology", label: "Technology" },
              { value: "clothing", label: "Clothing" },
              { value: "furniture", label: "Furniture" },
            ]}
            styles={{ option: { whiteSpace: "nowrap" } }}
          />
          <TextInput style={{ flexGrow: 1 }} />
        </Group>
        <Divider my="md" />
        <SimpleGrid cols={{ md: 5, sm: 4, xs: 3, base: 2 }}>
          <ProductCard
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
            rating={4.5}
          />
          <ProductCard
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
            rating={4.5}
          />
          <ProductCard
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
            rating={4.5}
          />
          <ProductCard
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
            rating={4.5}
          />
          <ProductCard
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
            rating={4.5}
          />
          <ProductCard
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
            rating={4.5}
          />
          <ProductCard
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
            rating={4.5}
          />
          <ProductCard
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
            rating={4.5}
          />
          <ProductCard
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
            rating={4.5}
          />
          <ProductCard
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
            rating={4.5}
          />
        </SimpleGrid>
      </Flex>
    </Container>
  );
}
