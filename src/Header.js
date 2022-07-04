//Components

import { Flex, Box, Heading, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Flex>
        <Box bg="green.900" w="100vw" p={2} color="white">
          <Center>
            <Heading>Task Manager</Heading>
          </Center>
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
