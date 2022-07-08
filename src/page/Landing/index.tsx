import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Box,
  SimpleGrid,
  Circle,
  Center,
  Link
} from '@chakra-ui/react';

export default function Landing() {
  return (
    <Stack>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: { base: '20%', md: '30%' },
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                ASTI
              </Text>
              <Text color={'#2b51cb'} as={'span'}> (
                <Text color={"black"} as={'span'} >Atasi </Text>
                Stunting)
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'}>
              <Text as={'span'} fontWeight={{ base: 'bold'}}>ASTI (Atasi Stunting) </Text>
              is an application created by the GIGIH Generation
              that aims to help prevent stunting in Indonesia.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Link href="#next">
                <Button
                  rounded={'full'}
                  bg={'#2b51cb'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Read More
                </Button>
              </Link>

            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Image Cover'}
            boxSize={600}
            objectFit={'cover'}
            src={
              'asset/cover.jpg'
            }
          />
        </Flex>
      </Stack>

      <Stack bg={useColorModeValue('gray.100', 'white.200')} minH={'100vh'}
        id="next"
        p={20}>
        <SimpleGrid spacing='40px' columns={3}>
          <Box p={10} w="700px">
            <Text color="black" fontSize={{ base: '3xl', lg: '5xl' }}>
              The Prevalence of Child 
              <Text fontWeight={{ base: 'bold'}}>Stunting in Indonesia </Text> 
            </Text>
            <Link href="/stunting-statistic">
              <Button
                rounded={'full'}
                bg={'#2b51cb'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Read More
              </Button>
            </Link>

          </Box>
          <Center w="600px">
            <Circle bg="#2b51cb" size="250px" p={5}>
              <Image src="asset/botol.png" objectFit="cover"></Image>
            </Circle>
          </Center>
          <Center>
            <Text color="black" fontSize={{ base: '3xl', lg: '5xl' }} fontWeight={{ base: 'bold'}}>
              24,4%<Text fontWeight={{ base: 'normal'}}>(SSGI,2021) </Text> 
            </Text>
          </Center>
        </SimpleGrid>
        <Stack spacing={6} w={'full'} p={10} >
          <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text color={'black'} as={'span'}>
              What is Childhood<Text color={"black"} as={'span'} fontWeight="bold" > Stunting</Text>
              ?
            </Text>
          </Text>
          <Text fontSize={{ base: '1xl', lg: '2xl' }} color={'black'}>
            <Text as={'span'} fontWeight={{ base: 'bold'}}>Stunting </Text>
            is one of the leading measures used to assess childhood malnutrition. 
            It indicates that a child has failed to reach their growth potential as a result of disease, 
            poor health and malnutrition. 
            A child is defined as <Text as={'span'} fontWeight={{ base: 'bold'}}>‘stunted’</Text>
            if they are too short for their age. 
            This indicates that their growth and development have been hindered.
          </Text>
          <Box>
            <Link href="/stunting-detail">
              <Button
                rounded={'full'}
                bg={'#2b51cb'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Read More
              </Button>
            </Link>

          </Box>


        </Stack>
      </Stack>
    </Stack>
    
  );
}