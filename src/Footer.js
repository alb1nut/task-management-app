//Components
import {
    Box,
    VStack,
    Text,
    Flex,
    Center,
  } from "@chakra-ui/react";
  const Footer = ({ length }) => {
    const today = new Date();
  
    return (
      <footer>
        <Flex>
          <Box 
          position='fixed'
          bottom={0}
          // left={0}
          bg="green.900" w="100vw" color="white">
            <Center>
              <VStack>
                <Box>
                  <Text fontSize="2xl">
                    {length} {length === 1 ? "item" : "items"} on list
                  </Text>
                </Box>
                <Text fontSize="md">Copyright &copy; {today.getFullYear()}</Text>
              </VStack>
            </Center>
          </Box>
        </Flex>
      </footer>
    );
  };
  
  export default Footer;
  