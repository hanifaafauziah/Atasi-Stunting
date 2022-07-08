import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Link} from "react-router-dom";
  
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Register
          </Heading>
          <Text fontSize={'lg'} color={'black'} fontWeight={'bold'} letterSpacing= "10px">
            AS
            <span style={{color: "#2b51cb"}}>
              TI
            </span>
            <span style={{letterSpacing: "2px"}}>
              (Atasi 
              <span style={{color: "#2b51cb"}}>
                Stunting
              </span>
              )
            </span>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          width={'500px'}>
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Public Health Center Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="code" isRequired>
              <FormLabel>Public Health Center Code</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="province" isRequired>
              <FormLabel>Province</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="regency-city" isRequired>
              <FormLabel>Regency/City</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="district" isRequired>
              <FormLabel>District</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="urban" isRequired>
              <FormLabel>Urban Community</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="village" isRequired>
              <FormLabel>Village</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Register
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already have an account? <Link color={'blue.400'} to={"/login"}>Login Here</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}