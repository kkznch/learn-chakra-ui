import { Box } from "@chakra-ui/react"

export const Position = () => {
  return (
    <>
      <Box position="absolute">Cover</Box>
      <Box pos="absolute">Cover</Box>
      <Box pos="absolute" top="0" left="0">
        Absolute with top and left
      </Box>
      <Box pos="fixed" w="100%" zIndex={2}>
        Fixed with zIndex
      </Box>
    </>
  );
}

