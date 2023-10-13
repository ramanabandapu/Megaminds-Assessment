import React from 'react'
import { Checkbox, Box, Stack } from '@chakra-ui/react';
const FilterOptions = () => {


  return (
   <Box h={"430px"} border={"1px solid red"} >
    <Stack direction='column'>
  <Checkbox>Bath And Body Sets</Checkbox>
  <Checkbox>Bath Salts</Checkbox>
  <Checkbox>Blush</Checkbox>
  <Checkbox>Body Lotions</Checkbox>
  <Checkbox>Body Oils</Checkbox>
  <Checkbox>Cleaning Wipes</Checkbox>
  <Checkbox>Conditioners</Checkbox>
  <Checkbox>Cleaners</Checkbox>
  <Checkbox>Diffusers</Checkbox>
  <Checkbox>Dish Soap</Checkbox>
  <Checkbox>Dry Shampoos</Checkbox>
  <Checkbox>Eau DE Toilettes</Checkbox>
  <Checkbox>Lip Sticks</Checkbox>
</Stack>
    
   </Box>
  )
}

export default FilterOptions;