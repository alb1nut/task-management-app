import "./index.css";
import ListItem from "./ListItem";

import { Box, Center, Text, useMediaQuery } from "@chakra-ui/react";

const Content = ({ items, handleCheck, handleDelete }) => {
  const [isLargerThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <Box
    
      height='70vh'
    mr={isLargerThan600 && "1.0rem"}>
      {items.length > 0 ? (
        // <Box

        // >
        items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <Center>
        <Box
        borderRadius="0.375rem"
            bg="green.900"
            display="flex"
            width="70vw"
            p={4}
            m={2}
            color="white"
          >
            <Text
            // textAlign='center'
           
            color="whiteAlpha.900" 
            fontSize={ isLargerThan600 ? 'md' : 'xl'}
            >No Item on List</Text>
          </Box>
        </Center>
      )}
    </Box>
  );
};

export default Content;

// import { useState } from "react";
// //Components

// const Content = () => {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       checked: true,
//       item: "Fish",
//     },
//     {
//       id: 2,
//       checked: false,
//       item: "Meat",
//     },
//     {
//       id: 3,
//       checked: false,
//       item: "Drink",
//     },
//   ]);

//   const handleCheck = (id) => {
//     const listItems = items.map((item) =>
//       item.id === id ? { ...item, checked: !item.checked } : item
//     );
//     setItems(listItems);
//     localStorage.setItem("shoppinglist", JSON.stringify(listItems));
//   };

//   const handleDelete = (id) => {
//     const listItems = items.filter((item) => item.id !== id);
//     setItems(listItems);
//     localStorage.setItem("shoppinglist", JSON.stringify(listItems));
//   };

// //   const item ={
// //      width: '200px'
// //   }

//   return (
//     <main className="App">
//       {items.length ? (
//         <ul style={{

//         }}>
//           {items.map((item) => (
//             <div className={item} key={item.id}>
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheck(item.id)}
//                 checked={item.checked}
//               />
//               <label
//                 style={item.checked ? { textDecoration: "line-through" } : null}
//                 onDoubleClick={() => handleCheck(item.id)}
//               >
//                 {item.item}{" "}
//               </label>
//               <button onClick={() => handleDelete(item.id)}>Delete</button>
//             </div>
//           ))}
//         </ul>
//       ) : (
//         <h2>No List Item</h2>
//       )}
//     </main>
//   );
// };

// export default Content;
