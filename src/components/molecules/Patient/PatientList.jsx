import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import {Link} from 'react-router-dom';

const PatientList = ({patients}) => {

  return (
    <Box>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Name</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {patients.map(patient => (
              <Tr key={patient.id}>
                <Td>{patient.id}</Td>
                <Td>{patient.name}</Td>
                <Td>{patient.status}</Td>
                <Td>
                  <Link to={`/patients/${patient.id}`}>
                    <Button>Details</Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

    </Box>
  );
}

export default PatientList;