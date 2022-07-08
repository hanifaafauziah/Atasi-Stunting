import React, { useState } from 'react'
import {
  Box,
  Heading,
  SimpleGrid
} from '@chakra-ui/react';
import Card from '../../components/molecules/Card';
import FoodList from './FoodList';

const Food = () => {

  const [foods] = useState(FoodList);
  
  return(
    <Box ml={20}
      mt={10}
    >
      <Heading mb={4}>Food Recommendation for Pregnant Woman</Heading>
      <SimpleGrid columns={3}>
        {foods.map((food:any) => {
          return (
            <Card
              key={food.id}
              product={food.product}
              summary={food.summary}
              longLine={food.longLine}
              href={food.href}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Food;