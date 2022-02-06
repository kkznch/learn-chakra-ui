import { Text } from '@chakra-ui/react';

export const Typography = () => {
  return (
    <>
      <Text fontSize="md">ほげほげ</Text>
      <Text fontSize={32}>ふがふが</Text>
      <Text fontSize='2rem'>ぴよぴよ</Text>
      <Text textAlign={[ 'left', 'center' ]}>わおわお</Text>
    </>
  );
}

