"use client";

import { CartItem } from "@/components/CartItem";
import { HeaderContext } from "@/contexts/HeaderContext";
import {
  Button,
  Checkbox,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  useSafeMantineTheme,
} from "@mantine/core";
import { useContext } from "react";

export default function ClientCartPage() {
  const theme = useSafeMantineTheme();

  const { height: headerHeight } = useContext(HeaderContext);

  return (
    <Container w="100%" style={{ flexGrow: 1 }} py="md">
      <Flex gap="lg" pos="relative">
        <Stack style={{ flexGrow: 1 }}>
          <Flex
            bg="white"
            p="md"
            justify="space-between"
            style={{
              borderTopLeftRadius: theme.radius.md,
              borderTopRightRadius: theme.radius.md,
              boxShadow: theme.shadows.md,
            }}
          >
            <Group>
              <Checkbox color="black" indeterminate />
              <Title order={4}>Select All</Title>
            </Group>
            <Button variant="subtle" color="black">
              Remove
            </Button>
          </Flex>
          <CartItem
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
          />
          <CartItem
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
          />
          <CartItem
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
          />
          <CartItem
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
          />
          <CartItem
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
          />
          <CartItem
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
          />
          <CartItem
            image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
            name="Indomie Goreng Instan"
            price={3500}
            isLast
          />
          <Stack
            pos="sticky"
            bottom="var(--mantine-spacing-md)"
            bg="white"
            p="lg"
            style={{
              borderRadius: theme.radius.md,
              boxShadow: theme.shadows.md,
            }}
            hiddenFrom="sm"
          >
            <Title order={3}>Summary</Title>
            <Flex justify="space-between">
              <Text>Price Total</Text>
              <Text fw="bold">
                {Intl.NumberFormat("id-ID", {
                  currency: "idr",
                  style: "currency",
                }).format(1000000)}
              </Text>
            </Flex>
            <Button color="black">Purchase!</Button>
          </Stack>
        </Stack>
        <Stack
          pos="sticky"
          top={`calc(${headerHeight}px + var(--mantine-spacing-sm) + var(--mantine-spacing-sm) + var(--mantine-spacing-md))`}
          right={0}
          bg="white"
          p="lg"
          style={{
            flexBasis: "40%",
            borderRadius: theme.radius.md,
            boxShadow: theme.shadows.md,
            alignSelf: "flex-start",
          }}
          visibleFrom="sm"
        >
          <Title order={3}>Summary</Title>
          <Flex justify="space-between">
            <Text>Price Total</Text>
            <Text fw="bold">
              {Intl.NumberFormat("id-ID", {
                currency: "idr",
                style: "currency",
              }).format(1000000)}
            </Text>
          </Flex>
          <Button color="black">Purchase!</Button>
        </Stack>
      </Flex>
    </Container>
  );
}
