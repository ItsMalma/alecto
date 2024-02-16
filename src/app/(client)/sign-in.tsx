"use client";

import {
  Button,
  Divider,
  Flex,
  Modal,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";

type ClientSignInModalProps = {
  opened: boolean;
  onClose: () => void;

  openSignUpModal: () => void;
};

export default function ClientSignInModal(props: ClientSignInModalProps) {
  return (
    <Modal
      opened={props.opened}
      onClose={props.onClose}
      centered
      w="30%"
      withCloseButton={false}
    >
      <Stack p="xl">
        <Flex pb="xl" justify="space-between" align="flex-end">
          <Title>Sign In</Title>
          <Button
            variant="subtle"
            size="sm"
            c="green"
            onClick={() => {
              props.onClose();
              props.openSignUpModal();
            }}
          >
            Sign Up
          </Button>
        </Flex>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" type="password" />
        <Button color="green">Sign In</Button>
        <Divider label="or" labelPosition="center" />
        <Button variant="outline" leftSection={<IconBrandGoogle />}>
          Google
        </Button>
      </Stack>
    </Modal>
  );
}
