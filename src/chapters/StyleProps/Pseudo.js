import { Box, Button } from '@chakra-ui/react';

export const Pseudo = () => {
  return (
    <>
      <Button
        colorScheme="teal"
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        Hover me
      </Button>
      <Box
        role="group"
      >
        <Box
          _hover={{ fontWeight: 'semibold' }}
          _groupHover={{ color: 'tomato' }}
        >
          hoge
        </Box>
      </Box>
    </>
  );
}

