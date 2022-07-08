import React, { useState } from 'react'
import {
  Heading,
  Box, 
  SimpleGrid
} from '@chakra-ui/react';
import Card from '../../components/molecules/Card'
import LifestyleList from './LifestyleList'

export default function Lifestyle() {
    
  const [lifestyles] = useState(LifestyleList);

  return(
    <Box ml={20}
      mt={10}
    >
      <Heading mb={4}>Lifestyle to Prevent Stunting Children</Heading>
      <SimpleGrid columns={[3]} p={5}>
        {lifestyles.map((lifestyle:any) => {
          return (
            <Card
              key={lifestyle.id}
              product={lifestyle.product}
              summary={lifestyle.summary}
              longLine={lifestyle.longLine}
              href={lifestyle.href}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}