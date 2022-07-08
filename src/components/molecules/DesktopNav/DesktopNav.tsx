import {
  Box,
  HStack,
  Link
} from '@chakra-ui/react';

import { Link as ReachLink} from "react-router-dom";

import NavItem from '../Header/NavItem';

const DesktopNav = () => {
  return (
    <HStack spacing={8} >
      {NavItem.map((navitem) => (
        <Box key={navitem.label}>
          <Link as={ReachLink} 
            p={2}
            to={navitem.href}
            fontSize={'sm'}
            fontWeight={500}
            _hover={{
              color: "#2b51cb",
            }}>
            {navitem.label}
          </Link>
        </Box>
      ))}
    </HStack>
  );
};

export default DesktopNav;