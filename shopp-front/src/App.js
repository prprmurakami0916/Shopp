import { useState, useEffect } from 'react';
import './App.css';
import Item from './component/Item';
import { Box, HStack } from '@chakra-ui/react'
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);

  const fetch = async () => {
    const response = await axios.get('http://localhost:3010/items');
    setItems(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Box m={10}>
      <HStack spacing='24px'>
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              index={index}
              name={item.name}
              detail={item.detail}
            />
          );
        })}
      </HStack>
    </Box>
  );
}

export default App;
