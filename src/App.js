// import './App.css';
import { useEffect, useState } from "react";
//Components
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddList from "./AddList";
import Search from "./Search";
const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist'))  || []);

  const [newItem, setNewItem] = useState("");
  const [search ,setSearch] = useState('')

  useEffect(()=>{

    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items])


  const addList = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems)
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems)
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems)
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newItem) return;
     addList(newItem)
     setNewItem('')
  };



  return (
    <div className="App">
      <Header />
      <AddList
        addItem={newItem}
        setAddItem={setNewItem}
        handleAdd={handleAdd}
      />
      <Search  
        search ={search}
        setSearch= {setSearch}

      />
      <Content
        items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
};

export default App;
