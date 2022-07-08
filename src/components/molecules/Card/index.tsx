import React from "react";
import {
  Box,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";

function Card(props: { product: string; summary: string; longLine: string; href:string}) {
  const { product, summary, longLine, href } = props;

  return (
    <Box
      p={6}
      display={{ md: "flex" }}
      borderWidth={1}
      mb={10}
      mr={20}
    > 
      <VStack
        align={{ base: "center"}}
        textAlign={{ base: "center", md: "justify" }}
      >
        <Box alignItems="center">
          <Image
            objectFit="cover"
            boxSize="250"
            src={href}
            alt="food-recomendation"
          />
        </Box>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          {product}
        </Text>
        <Text
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
        >
          {summary}
        </Text>
        <Text my={2} color="gray.500">
          {longLine}
        </Text>
      </VStack>
    </Box>
  );
}

export default Card;
