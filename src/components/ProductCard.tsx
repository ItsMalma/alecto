import {
  Flex,
  Image,
  Rating,
  Stack,
  Text,
  useSafeMantineTheme,
} from "@mantine/core";

type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  rating: number;
};

export function ProductCard(props: ProductCardProps) {
  const theme = useSafeMantineTheme();

  return (
    <Flex
      bg="white"
      className="product-card"
      direction="column"
      style={{
        borderRadius: theme.radius.md,
        cursor: "pointer",
        border: `1px solid ${theme.colors.gray[1]}`,
        boxShadow: theme.shadows.sm,
        overflow: "hidden",
      }}
    >
      <Image
        src={props.image}
        alt={`${props.name}'s Image`}
        mah={{ xl: 150 }}
      />
      <Stack gap="xs" p="xs" style={{ flexGrow: 1 }}>
        <Text style={{ textOverflow: "ellipsis" }}>{props.name}</Text>
        <Text fw={700}>
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(props.price)}
        </Text>
        <Rating value={props.rating} fractions={2} readOnly />
      </Stack>
    </Flex>
  );
}
