import { 
  Box, 
  FormControl, 
  FormLabel, 
  Button,
  Stack,
  useColorModeValue,
  Input,
  Select
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
type Patient = {
  id: string,
  name: string,
  age: string,
  gender: string,
  height: string,
  status: string
}

const initialFormValue: Patient = {
  id: '',
  name: '',
  age: '',
  gender: '',
  height: '',
  status: '',
}

export default function AddPatient(){
  const [formData,setFormData] = useState<Patient>({
    ...initialFormValue,
  })

  const navigate = useNavigate();

  const handleFormValueChange = (field: string, e: React.ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    })
  }
  
  const handleSubmit = (event: { preventDefault: () => void; }) =>{
    event.preventDefault();
    fetch('http://localhost:3001/patients', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    }).then(()=>{
      /* eslint-disable no-console */
      console.log('new patient added');
      /* eslint-enable no-console */
      navigate('/dashboard');
    })
  }

  return(
    <Box
      p={10}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={4}>
        <form onSubmit={handleSubmit} id="add_form" data-testid="form">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
              type="text" 
              value={formData.name}
              onChange={(e) => handleFormValueChange('name', e)}
            />
          </FormControl>

          <FormControl id="gender" isRequired>
            <FormLabel>Gender</FormLabel>
            <Select 
              placeholder="Select Gender"
              value={formData.gender}
              onChange={(e) => handleFormValueChange('gender', e)}
            >
              <option value='Boy'>Boy</option>
              <option value='Girl'>Girl</option>
            </Select>
          </FormControl>

          <FormControl id="age" isRequired>
            <FormLabel>Age (months)</FormLabel>
            <Input 
              type="text" 
              value={formData.age}
              onChange={(e) => handleFormValueChange('age', e)}
            />
          </FormControl>

          <FormControl id="height" isRequired>
            <FormLabel>Height (cm)</FormLabel>
            <Input 
              type="text" 
              value={formData.height}
              onChange={(e) => handleFormValueChange('height', e)}
            />
          </FormControl>

          <FormControl id="status" isRequired>
            <FormLabel>Status</FormLabel>
            <Select 
              placeholder="Select Status"
              value={formData.status}
              onChange={(e) => handleFormValueChange('status', e)}
            >
              <option value='Normal'>Normal</option>
              <option value='Moderately stunted'>Moderately stunted</option>
              <option value='Severely stunted '>Severely stunted</option>
            </Select>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              type="submit"
            >
              Save
            </Button>
          </Stack>
        </form>
    
      </Stack>
    </Box>
    
  );
}