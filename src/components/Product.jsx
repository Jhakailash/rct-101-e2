import React from "react";
import{Image,Text,Stack,Tag,TagLabel,Heading,Box} from '@chakra-ui/react'

const Product = ({item}) => {
  // TODO: Remove below const and instead import them from chakra
  
 
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={item.imagesrc} />
      <Text data-cy="product-category">{item.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{item.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{item.title}</Heading>
      <Box data-cy="product-price">{item.price}</Box>
    </Stack>
  );
};

export default Product;
