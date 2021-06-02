import { PropsWithChildren } from 'react';
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/layout';

const Heading = (props: PropsWithChildren<HeadingProps>) => {
  return (
    <ChakraHeading opacity={1} {...props}>
      {props.children}
    </ChakraHeading>
  );
}

export default Heading;