import { Box } from '@chakra-ui/react';

export const MarginAndPadding = () => {
  return (
    <>
      <Box m={2} bg='pink'>Hoge</Box>
      <Box maxW='960px' mx='auto' bg='pink'>Fuga</Box>
      <Box m={[1, 3]} bg='pink'>Piyo</Box>
    </>
  );
}

