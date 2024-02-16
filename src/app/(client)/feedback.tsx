import {
  Button,
  Group,
  Modal,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import { IconSend } from "@tabler/icons-react";

type ClientFeedbackModalProps = {
  opened: boolean;
  onClose: () => void;
};

export function ClientFeedbackModal(props: ClientFeedbackModalProps) {
  return (
    <Modal
      opened={props.opened}
      onClose={props.onClose}
      title="Feedback"
      centered
    >
      <Stack>
        <TextInput placeholder="Enter subject" />
        <Textarea placeholder="Enter body" rows={8} />
        <Group>
          <Button rightSection={<IconSend />}>Send</Button>
        </Group>
      </Stack>
    </Modal>
  );
}
