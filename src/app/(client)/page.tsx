"use client";

import { ProductCard } from "@/components/ProductCard";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import {
  Container,
  Flex,
  Image,
  Stack,
  Title,
  useSafeMantineTheme,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function ClientHomePage() {
  const theme = useSafeMantineTheme();

  const carouselAutoplay = useRef(Autoplay({ delay: 5000 }));

  const {
    width: carouselWidth,
    height: carouselHeight,
    ref: carouselRef,
  } = useElementSize();

  return (
    <Container w="100%" style={{ flexGrow: 1 }} py="md">
      <Flex direction="column">
        <Carousel
          ref={carouselRef}
          mih={100}
          h={carouselWidth / 3}
          mah={300}
          withIndicators={true}
          withControls={false}
          slideSize={"100%"}
          slideGap={"0"}
          style={{
            borderRadius: "var(--mantine-radius-md)",
            overflow: "hidden",
          }}
          plugins={[carouselAutoplay.current]}
          onMouseEnter={carouselAutoplay.current.stop}
          onMouseLeave={carouselAutoplay.current.reset}
        >
          <CarouselSlide bg="red">
            <Image
              src="/Carousel1.jpeg"
              alt="Carousel 1"
              fit="fill"
              w={carouselWidth}
              h={carouselHeight}
            />
          </CarouselSlide>
          <CarouselSlide bg="green">
            <Image
              src="/Carousel2.jpeg"
              alt="Carousel 2"
              fit="fill"
              w={carouselWidth}
              h={carouselHeight}
            />
          </CarouselSlide>
          <CarouselSlide bg="blue"></CarouselSlide>
          <CarouselSlide bg="yellow"></CarouselSlide>
        </Carousel>
        <Stack
          bg="white"
          p="md"
          my="md"
          style={{ borderRadius: theme.radius.md, boxShadow: theme.shadows.lg }}
        >
          <Title order={2}>New Products</Title>
          <Carousel
            slideSize={{
              xl: "20%",
              lg: "20%",
              md: "25%",
              sm: "33.3%",
              xs: "50%",
            }}
            slideGap="md"
            loop={true}
            align="start"
            slidesToScroll={2}
          >
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
          </Carousel>
        </Stack>
        <Stack
          bg="white"
          p="md"
          my="md"
          style={{ borderRadius: theme.radius.md, boxShadow: theme.shadows.lg }}
        >
          <Title order={2}>Latest Products</Title>
          <Carousel
            slideSize={{
              xl: "20%",
              lg: "20%",
              md: "25%",
              sm: "33.3%",
              xs: "50%",
            }}
            slideGap="md"
            loop={true}
            align="start"
            slidesToScroll={2}
          >
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
            <CarouselSlide py="md">
              <ProductCard
                image="https://assets.klikindomaret.com/products/10003517/10003517_1.jpg"
                name="Indomie Goreng Instan"
                price={3500}
                rating={4.5}
              />
            </CarouselSlide>
          </Carousel>
        </Stack>
      </Flex>
    </Container>
  );
}
