import { Box, Grid } from '@chakra-ui/react'

export const GridLayout = () => {
  return (
    <>
      <Box display='grid' gridGap={2} gridAutoFlow='row dense' bgColor='green.300'>
        Grid
      </Box>
      <Grid gap={2} autoFlow='row dense' bgColor='green.100'>
        Grid
      </Grid>
    </>
  );
}

