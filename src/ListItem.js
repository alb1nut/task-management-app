import {
    VStack,
    Box,
    Checkbox,
    Button,
    Flex,
    Spacer,
    Center,
    Text,
    useMediaQuery,
  } from "@chakra-ui/react";
  
  const ListItem = ({ item, handleCheck, handleDelete }) => {
  
    const [isLargerThan600] = useMediaQuery('(max-width: 600px)')
  
    return (
      <VStack>
        <Flex 
        justify='center'
        m='auto'
        w='70vw'
        >
          
          <Box
            // minWidth='max-content' alignItems='center' gap='2'
            // overflowX='hidden'
            borderRadius="0.375rem"
            bg="green.900"
            display="flex"
            flexDirection={isLargerThan600 ? 'column' : 'row'}
            // alignItems="spaceBetween"
            // justify="start"
            width="70vw"
            p={4}
            m={2}
          >
            <Checkbox
              colorScheme="blue"
              checked={item.checked}
              spacing="2rem"
              size="lg"
              type="checkbox"
              m={2}
              onChange={() => handleCheck(item.id)}
            >
              <label
                style={
                  item.checked
                    ? { textDecoration: "5px line-through black" }
                    : null
                }
                onDoubleClick={() => handleCheck(item.id)}
              >
                <Text 
                color="whiteAlpha.900" 
                fontSize={ isLargerThan600 ? 'md' : 'xl'}
                >
                  {item.item}
                </Text>
              </label>
            </Checkbox>
            <Spacer />
            <Center>
              <Button
                pl={5}
                pr={5}
                size="sm"
                colorScheme="red"
                variant="outline"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </Center>
          </Box>
        </Flex>
      </VStack>
    );
  };
  
  export default ListItem;
  