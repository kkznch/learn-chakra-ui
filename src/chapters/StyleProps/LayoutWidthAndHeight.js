import { Box } from '@chakra-ui/react'

export const LayoutWidthAndHeight = () => {
  return (
    <>
      <Box width='100%' height={32} bgColor='pink.900' />
      <Box w='100%' h='32px' bgColor='pink.800' />
      <Box boxSize='sm' bgColor='pink.700' />
      <Box h={16} w={256} bgColor='pink.600' />
      <Box h={16} w='40px' bgColor='pink.500' />
    </>
  );
}

