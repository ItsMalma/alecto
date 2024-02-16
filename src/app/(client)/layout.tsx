"use client";

import { HeaderContext } from "@/contexts/HeaderContext";
import {
  ActionIcon,
  Box,
  Burger,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  Flex,
  Group,
  Image,
  Menu,
  NavLink,
  Stack,
  Tooltip,
  useSafeMantineTheme,
} from "@mantine/core";
import { useDisclosure, useElementSize } from "@mantine/hooks";
import {
  IconBuildingStore,
  IconHome,
  IconMessage,
  IconShoppingCart,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { ClientFeedbackModal } from "./feedback";
import ClientSignInModal from "./sign-in";
import ClientSignUpModal from "./sign-up";

export default function ClientLayout(props: PropsWithChildren) {
  const theme = useSafeMantineTheme();

  const pathname = usePathname();

  const {
    width: headerWidth,
    height: headerHeight,
    ref: headerRef,
  } = useElementSize();

  const [burgerOpened, { toggle: toggleBurger }] = useDisclosure(false);
  const [drawerOpened, { close: closeDrawer, toggle: toggleDrawer }] =
    useDisclosure(false);

  const [
    feedbackModalOpened,
    { open: openFeedbackModal, close: closeFeedbackModal },
  ] = useDisclosure(false);
  const [
    signinModalOpened,
    { open: openSigninModal, close: closeSigninModal },
  ] = useDisclosure(false);
  const [
    signupModalOpened,
    { open: openSignupModal, close: closeSignupModal },
  ] = useDisclosure(false);

  return (
    <>
      <Flex direction="column" mih="100vh" bg="gray.0">
        <Flex
          ref={headerRef}
          bg="white"
          px="xl"
          py="sm"
          style={{
            borderBottom: `1px solid ${theme.colors.gray[1]}`,
            boxShadow: theme.shadows.xs,
            zIndex: 100,
          }}
          align="center"
          justify="space-between"
          pos="sticky"
          top={0}
        >
          <Box style={{ flexBasis: "30%" }}>
            <Image
              src="/Logo.png"
              alt="Logo Alecto"
              maw={{
                xl: 270,
                lg: 225,
                md: 192.85,
                sm: 168.75,
                xs: 150,
                base: 135,
              }}
              w={{
                xl: 270,
                lg: 225,
                md: 192.85,
                sm: 168.75,
                xs: 150,
                base: 135,
              }}
              mah={{
                xl: 50,
                lg: 41.66,
                md: 35.71,
                sm: 31.25,
                xs: 27.77,
                base: 25,
              }}
              h={{
                xl: 50,
                lg: 41.66,
                md: 35.71,
                sm: 31.25,
                xs: 27.77,
                base: 25,
              }}
            />
          </Box>
          <Group visibleFrom="xs">
            <Button
              component={Link}
              href="/"
              variant={pathname == "/" ? "filled" : "subtle"}
              color="black"
            >
              Home
            </Button>
            <Button
              component={Link}
              href="/products"
              variant={pathname == "/products" ? "filled" : "subtle"}
              color="black"
            >
              Products
            </Button>
          </Group>
          <Group
            visibleFrom="xs"
            align="center"
            justify="flex-end"
            style={{ flexBasis: "30%" }}
          >
            <Group visibleFrom="lg">
              <Tooltip label="Feedback">
                <ActionIcon
                  variant="subtle"
                  onClick={openFeedbackModal}
                  color="black"
                >
                  <IconMessage />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Cart">
                <ActionIcon
                  component={Link}
                  variant={pathname == "/cart" ? "filled" : "subtle"}
                  color="black"
                  href="/cart"
                >
                  <IconShoppingCart />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Order">
                <ActionIcon
                  component={Link}
                  variant={pathname == "/order" ? "filled" : "subtle"}
                  color="black"
                  href="/order"
                >
                  <IconTruckDelivery />
                </ActionIcon>
              </Tooltip>
            </Group>
            <Menu
              position="bottom-end"
              shadow="md"
              width={200}
              opened={burgerOpened}
              onChange={toggleBurger}
            >
              <Menu.Target>
                <Burger
                  hiddenFrom="lg"
                  opened={burgerOpened}
                  onClick={toggleBurger}
                />
              </Menu.Target>
              <Menu.Dropdown hiddenFrom="lg">
                <Menu.Item>
                  <Button
                    leftSection={<IconMessage />}
                    onClick={openFeedbackModal}
                    variant="subtle"
                    color="black"
                    w="100%"
                    justify="start"
                  >
                    Feedback
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button
                    component={Link}
                    href="/cart"
                    leftSection={<IconShoppingCart />}
                    variant={pathname == "/cart" ? "filled" : "subtle"}
                    color="black"
                    w="100%"
                    justify="start"
                  >
                    Cart
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button
                    component={Link}
                    href="/order"
                    leftSection={<IconTruckDelivery />}
                    variant={pathname == "/order" ? "filled" : "subtle"}
                    color="black"
                    w="100%"
                    justify="start"
                  >
                    Order
                  </Button>
                </Menu.Item>
                <Menu.Item hiddenFrom="md">
                  <Button
                    onClick={openSignupModal}
                    variant="outline"
                    color="green"
                    w="100%"
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
                <Menu.Item hiddenFrom="md">
                  <Button onClick={openSigninModal} color="green" w="100%">
                    Sign In
                  </Button>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Divider orientation="vertical" visibleFrom="md" />
            <ButtonGroup visibleFrom="md">
              <Button onClick={openSignupModal} variant="outline" color="green">
                Sign Up
              </Button>
              <Button onClick={openSigninModal} color="green">
                Sign In
              </Button>
            </ButtonGroup>
          </Group>
          <Burger
            hiddenFrom="xs"
            opened={drawerOpened}
            onClick={toggleDrawer}
          />
          <Drawer
            hiddenFrom="xs"
            opened={drawerOpened}
            onClose={closeDrawer}
            position="right"
            withCloseButton={false}
            size="70%"
          >
            <Stack>
              <NavLink
                component={Link}
                href="/"
                label="Home"
                leftSection={<IconHome />}
                color="black"
                active={pathname == "/"}
                variant={pathname == "/" ? "filled" : "subtle"}
              />
              <NavLink
                component={Link}
                href="/products"
                label="Products"
                leftSection={<IconBuildingStore />}
                color="black"
                active={pathname == "/products"}
                variant={pathname == "/products" ? "filled" : "subtle"}
              />
              <NavLink
                label="Feedback"
                leftSection={<IconMessage />}
                color="black"
                onClick={openFeedbackModal}
              />
              <NavLink
                component={Link}
                href="/cart"
                label="Cart"
                leftSection={<IconShoppingCart />}
                color="black"
                active={pathname == "/cart"}
                variant={pathname == "/cart" ? "filled" : "subtle"}
              />
              <NavLink
                component={Link}
                href="/order"
                label="Order"
                leftSection={<IconTruckDelivery />}
                color="black"
                active={pathname == "/order"}
                variant={pathname == "/order" ? "filled" : "subtle"}
              />
              <Button component={Link} href="/sign-in" color="green">
                Sign In
              </Button>
            </Stack>
          </Drawer>
        </Flex>

        <HeaderContext.Provider
          value={{ width: headerWidth, height: headerHeight }}
        >
          {props.children}
        </HeaderContext.Provider>
      </Flex>

      <ClientFeedbackModal
        opened={feedbackModalOpened}
        onClose={closeFeedbackModal}
      />
      <ClientSignUpModal
        opened={signupModalOpened}
        onClose={closeSignupModal}
        openSignInModal={openSigninModal}
      />
      <ClientSignInModal
        opened={signinModalOpened}
        onClose={closeSigninModal}
        openSignUpModal={openSignupModal}
      />
    </>
  );
}
