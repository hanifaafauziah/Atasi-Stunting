import {
  Box,
  Button,
  Heading, 
  Link, 
  Text,
  useColorModeValue
} from '@chakra-ui/react';

import {Link as ReachLink} from 'react-router-dom';
import PatientList from '../../components/molecules/Patient/PatientList';
import useFetch from './useFetch';
import { useDispatch } from 'react-redux';
import { getPatients } from './patientsSlice';
import { useEffect } from 'react';
import { AppDispatch } from 'app/store';

const Dashboard = () => {
  const {data: patients, isPending, error} = useFetch('http://localhost:3001/patients');

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPatients()); 
  }, [dispatch]);

  return (
    <Box
      p={10}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Link as={ReachLink} to={'/add-patient'}>
        <Button>New Patients</Button>
      </Link>
      <Heading p={2}>Stunting Children List</Heading>
      {error && <Text>{error}</Text>}
      {isPending && <Text>Loading...</Text>}
      {patients && <PatientList patients={patients}/>}

    </Box>
  );
}
export default Dashboard;