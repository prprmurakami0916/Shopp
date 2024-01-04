import { useState, useEffect } from 'react';
import axios from "axios";
import { Box, SimpleGrid, Heading } from '@chakra-ui/react'

import Item from './Item';
import { clamp } from 'framer-motion';

const ItemList = (props) => {
  const [items, setItems] = useState([]);

  const fetch = async () => {
    const response = await axios.get('http://localhost:3010/items');
    setItems(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Box w='92%' m='auto' py='clamp(90px, 9vw, 120px)'>
      <SimpleGrid columns={3} spacing={10}>
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              index={index}
              name={item.name}
              detail={item.detail}
              imageUrl={item.image_url}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  )
}

export default ItemList