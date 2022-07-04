import {
    Input,
    Flex,
    FormControl,
    IconButton,
    Center,
    HStack,
    useMediaQuery,
    Button,
  } from "@chakra-ui/react";
  
  import { useRef } from "react";
  
  import { AddIcon } from "@chakra-ui/icons";
  
  const AddList = ({ handleAdd, addItem, setAddItem }) => {
  
  const inputRef = useRef()
  
    const [isLargerThan600] = useMediaQuery("(max-width: 600px)");
  
    return (
      <form onSubmit={handleAdd}>
        <FormControl>
          <Flex alignItems="center" justifyContent="center">
            <HStack mt={3}>
              <Input
              autoFocus
              ref={inputRef}
                w={isLargerThan600 ? "60vw" : "80vw"}
                size={isLargerThan600 ? "md" : "lg"}
                ml={2}
                mr={2}
                isRequired
                id="addItem"
                type="text"
                placeholder="Add Item"
                value={addItem}
                onChange={(e) => setAddItem(e.target.value)}
                variant="filled"
              />
              <Center w="40px" h="40px" color="green.900">
                <Button
                 type="submit">
                  <IconButton
                    border="2px"
                    borderColor="green.900"
                    aria-label="Add to List"
                    icon={<AddIcon />}
                    onClick={() => inputRef.current.focus()}
                  />
                </Button>
              </Center>
            </HStack>
          </Flex>
        </FormControl>
      </form>
    );
  };
  
  export default AddList;
  