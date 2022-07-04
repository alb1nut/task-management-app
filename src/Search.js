import { Box, FormControl, Input } from "@chakra-ui/react";
import React from "react";

const Search = ({ search, setSearch }) => {
//   const [isLargerThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <Box>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormControl>
          <Input
            w='90vw'
            size='lg'
            ml={5}
            mr={2}
            mt={3}
            isRequired
            id="addItem"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="filled"
          />
        </FormControl>
      </form>
    </Box>
  );
};

export default Search;
