"use client";

import {
  Button,
  Center,
  Divider,
  Flex,
  Stack,
  TextInput,
  Title,
  useSafeMantineTheme,
} from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const theme = useSafeMantineTheme();

  const router = useRouter();

  return (
    <Center mih="100vh" bg="gray.0">
      <Stack
        w={{ base: "80%", xs: "60%", sm: "50%", md: "40%", lg: "30%" }}
        p={{ base: "lg", lg: "xl" }}
        bg="white"
        style={{ borderRadius: theme.radius.md, boxShadow: theme.shadows.xl }}
      >
        <Flex
          direction={{ base: "column", sm: "row" }}
          pb="xl"
          justify="space-between"
        >
          <Title>Sign In</Title>
        </Flex>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" type="password" />
        <Button variant="outline" color="green">
          Sign Up
        </Button>
        <Button color="green">Sign In</Button>
        <Divider label="or" labelPosition="center" />
        <Button variant="outline" leftSection={<IconBrandGoogle />}>
          Google
        </Button>
      </Stack>
    </Center>
  );
}
