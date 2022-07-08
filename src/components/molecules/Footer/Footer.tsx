// import { ReactNode } from 'react';

import {
  Box,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Link
} from "@chakra-ui/react";

import { Link as ReachLink} from "react-router-dom";

export default function Footer() {
  return (
    <Box id="contact"
      bg={"black"}
      color={"white"}>
      <SimpleGrid columns={3} px={10} py={5} spacingX='40px' spacingY='20px'>
        <Stack spacing={6}>
          <Box>
            <Image src='/asset/logo-asti-putih.png' alt='ASTI' w={400} h={100} borderRadius="full"/>
          </Box>
          <Text fontSize="m">
            ASTI (Atasi Stunting) is 
            an application created by the GIGIH Generation participants 
            that aims to help prevent stunting in Indonesia.
          </Text>
          <Text fontSize={'sm'}>
            © 2022 Generasi Gigih. All rights reserved
          </Text>
        </Stack>
        <Stack align={'center'} py={5}>
          <SimpleGrid columns={1} spacing={5}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Page</Text>
            <Link as={ReachLink} to={'/'}>Home</Link>
            <Link as={ReachLink} to={'/food'}>Food</Link>
            <Link as={ReachLink} to={'/lifestyle'}>Lifestyle</Link>
            <Link as={ReachLink} to={'/simulation'}>Simulation</Link>
          </SimpleGrid>
        </Stack>
        <Stack align={'flex-start'} py={5}>
          <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Supported By</Text>
          <SimpleGrid columns={2}>
            <Image src='/asset/gen-gigih.png' alt='Generasi Gigih' w={150} />
            <Image src='/asset/kampus-merdeka.png' alt='Kampus Merdeka' w={150} />
            <Image src='/asset/yabb-putih.png' alt='YABB' w={150} />
            <Image src='/asset/goto.png' alt='goto' w={150}/>
          </SimpleGrid>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}