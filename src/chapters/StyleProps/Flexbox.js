import { Box, Flex } from '@chakra-ui/react';

export const Flexbox = () => {
  return (
    <>
      <Box h={160} display='flex' alignItems='center' justifyContent='space-between' bgColor='yellow.300'>
        Box with Flex props
      </Box>
      <Flex align='center' justify='center' bgColor='yellow.100'>
        Flex Container
      </Flex>
    </>
  );
}

