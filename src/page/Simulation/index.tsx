import {
  Heading,
  Box,
  Text,
  Image,
  Flex
} from '@chakra-ui/react';
import BoyList from './BoyList';
import GirlList from './GirlList';
import ChartButton from '../../components/atoms/ChartButton/ChartButton';

export default function Simulation() {
  return(
    <Box ml={20}
      mt={10}
      mb={10}
    >
      <Heading size="2xl" mb={4}>Lets check Your Children Status!</Heading>
      <Text>This picture below is the standard measure to know about your child status.</Text>
      <Image src="asset/simulation/stunting.jpg"/>
      <br/>
      <Heading as="h2" size="lg">
        Find your children&lsquo;s standard deviation status with look at this chart below. 
      </Heading>
      <br/>
      <Heading size="lg">
        Boy&lsquo;s Chart
      </Heading>
      <br/>
      <Flex>
        {BoyList.map(
          function (data) {
            const { id, name, href } = data;
            return (
              <ChartButton
                key={id}
                name={name}
                href={href}
              />
            );
          })}
      </Flex>
      <br/>
      <Heading size="lg">
        Girl&lsquo;s Chart
      </Heading>
      <br/>
      <Flex>
        {GirlList.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function (data: { id: any; name: any; href: any; }) {
            const { id, name, href } = data;
            return (
              <ChartButton
                key={id}
                name={name}
                href={href}
              />
            );
          })}
      </Flex>
    </Box>
  );
}