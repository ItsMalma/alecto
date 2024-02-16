import {
  Checkbox,
  Group,
  Image,
  Stack,
  Text,
  useSafeMantineTheme,
} from "@mantine/core";

type CartItemProps = {
  image: string;
  name: string;
  price: number;
  isLast?: boolean;
};

export function CartItem(props: CartItemProps) {
  const theme = useSafeMantineTheme();

  return (
    <Stack
      bg="white"
      p="md"
      gap="xs"
      style={{
        boxShadow: theme.shadows.md,
        borderBottomLeftRadius: props.isLast ? theme.radius.md : 0,
        borderBottomRightRadius: props.isLast ? theme.radius.md : 0,
      }}
    >
      <Group>
        <Checkbox color="black" />
        <Image
          radius="md"
          src={props.image}
          alt={`${props.name}'s Image`}
          mah={{ xl: 100, lg: 95, md: 90, sm: 85, xs: 80, base: 80 }}
        />
        <Stack gap="xs" style={{ alignSelf: "flex-start" }}>
          <Text>{props.name}</Text>
          <Text fw="bold">
            {Intl.NumberFormat("id-ID", {
              currency: "idr",
              style: "currency",
            }).format(props.price)}
          </Text>
        </Stack>
      </Group>
    </Stack>
  );
}
