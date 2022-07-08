/* eslint-disable max-len */
import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';

function StuntingDetail() {
  return (
    <Container maxW="7xl" p="10">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src="asset/cause.png"
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <Heading marginTop="1">
            <Link href="/#" textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Causes of Stunting in Children
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            mt="20px"
          >
            1. Malnutrition Levels Since Pregnancy
            <Divider orientation="horizontal" my="20px" />
            When life begins in the womb, the developing embryo depends on the food the mother eats to promote growth, and this continues after birth through breastfeeding.
            <br />
            Poor maternal nutrition can limit fetal growth. Poor fetal growth, ultimately increases the risk of neonatal death. In the first 1000 days, the risk of stunting is closely related to maternal health.
            <br />
            The likelihood of stunting for the baby increases if the mother is infected with malaria, intestinal worms, or HIV/AIDS. Women who develop hypertension during pregnancy are more likely to experience complications that increase the risk of underweight babies and premature birth.
            <br />
            In addition, in the case of pregnancy in adolescence, it creates competition in the absorption of nutrients between the mother who is still growing and developing and her fetus.
          </Text>
        </Box>
      </Box>
      <Divider marginTop="5" />
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
          mt="20px"
        >
          2. Unsupportive Environment
          <Divider orientation="horizontal" my="20px" />
          Negligence or the absence of caregivers can cause childrens food needs are not optimal and there are fewer opportunities for children to play and learn, both of which have the potential to inhibit the growth and development of the little one.
          In addition, when access to quality food is limited or even completely blocked. Due to economic reasons, children do not get nutrition that should be from animal sources such as dairy products, eggs and meat.
          <br />
          Ineffective parenting is also one of the causes of stunting in children. Parenting here relates to the behavior and practice of feeding children. If parents do not provide good nutritional intake, then the child can experience stunting. In addition, maternal factors during adolescence and pregnancy lack of nutrition and poor lactation can also affect the growth and brain of children.
        </Text>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
          mt="20px"
        >
          <Divider orientation="horizontal" my="20px" />
          3. Lack of complementary foods for breast milk (MPASI)
          <Divider orientation="horizontal" my="20px" />
          Starting at the age of 6 months, the child&apos;s need for energy and nutrition is not enough to be supported by breastfeeding alone. The solution is to combine breastfeeding with complementary foods. You can combine foods such as cereals and other staple foods, refined fruits and vegetables, milk and eggs, and fish and meat. Therefore, the lack of solid food intake is one of the causes of stunting in children.
        </Text>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
          mt="20px"
          mb="100px"
        >
          <Divider orientation="horizontal" my="20px" />
          4. Food and Water Hygiene Issues
          <Divider orientation="horizontal" my="20px" />
          The next cause of stunting in children comes from the problem of food and water hygiene that is not guaranteed. Food and water contaminated by environmental pollutants or so-called mycotoxins. Harmful chemicals produced by mold in leftover food can cause infections that inhibit growth.
          <br />
          Simple things like washing hands with soap using clean water and ensuring sanitary conditions can minimize the risk of infections such as diarrhea, which stops children from growing properly. Food stored in the open or in unclean containers, or left at temperatures that allow bacteria to grow, can also make children sick and inhibit their growth.
        </Text>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
          mt="20px"
          mb="100px"
        >
          <Divider orientation="horizontal" my="20px" />
          5. Not Getting Exclusive Breastfeeding
          <Divider orientation="horizontal" my="20px" />
          The World Health Organization (WHO) recommends that mothers begin breastfeeding within one hour of birth, then exclusively breastfeed their babies until six months of age. It would be better if you can continue breastfeeding until your child reaches the age of two years or more. Children who are not exclusively breastfed are more likely to experience stunting.
        </Text>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
          mt="20px"
          mb="100px"
        >
          <Divider orientation="horizontal" my="20px" />
          6. Infection
          <Divider orientation="horizontal" my="20px" />
          The cause of stunting in children could be due to infection. Diarrhea and respiratory diseases are known to have a negative impact on childrens growth. Stunting occurs when a childs height is low for their weight.
          {' '}
          <br />
          This can have long term consequences on linear growth, especially when not supported by healthy food intake. For example, 25% of children who have diarrhea five or more times before the age of 2 years is the leading cause of stunting in children.
        </Text>
        <Divider orientation="horizontal" my="20px" />
      </VStack>
    </Container>
  );
}

export default StuntingDetail;
