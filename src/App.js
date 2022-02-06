import { ChakraProvider } from '@chakra-ui/react';
import {
  MarginAndPadding,
  ColorAndBackgroundColor,
  Gradient,
  Typography,
  LayoutWidthAndHeight,
  Flexbox,
  GridLayout,
  BorderRadius,
  Position,
  Shadow,
  Pseudo,
} from './chapters/StyleProps';

function App() {
  return (
    <ChakraProvider>
      <MarginAndPadding />
      <ColorAndBackgroundColor />
      <Gradient />
      <Typography />
      <LayoutWidthAndHeight />
      <Flexbox />
      <GridLayout />
      <BorderRadius />
      <Position />
      <Shadow />
      <Pseudo />
    </ChakraProvider>
  );
}

export default App;
