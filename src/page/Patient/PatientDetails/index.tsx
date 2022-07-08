import { 
  Box, 
  useColorModeValue,
  Text,
  Button,
} from "@chakra-ui/react";
import useFetch from "../../Dashboard/useFetch";
import { useParams, useNavigate } from "react-router-dom";
  
const PatientDetails = () => {
  const {id} = useParams();
  const {data:patients, isPending, error} = useFetch('http://localhost:3001/patients/' + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch('http://localhost:3001/patients/' + id, {
      method: 'DELETE'
    }).then(()=>{
      /* eslint-disable no-console */
      console.log('patient deleted');
      /* eslint-enable no-console */
      navigate('/dashboard');
    })
  }

  return(
    <Box
      p={10}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >

      {isPending && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {patients && (
        <>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="2xl"
            letterSpacing="wide"
            color="black"
            mb={4}
          >
            Patient Details - { patients['name'] }
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Name :{' '}
            </Text>
            { patients['name'] }
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Age :{' '}
            </Text>
            { patients['age'] } months
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Gender :{' '}
            </Text>
            { patients['gender'] }
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Height :{' '}
            </Text>
            { patients['height'] } cm
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Status :{' '}
            </Text>
            { patients['status'] }
          </Text>
          
          <Button 
            onClick={handleDelete}
            mt={4}
          >
            Delete
          </Button>

        </>
      )}
    </Box>
      
  );
}

export default PatientDetails;