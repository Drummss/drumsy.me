import { PropsWithChildren } from 'react';

import { TextProps } from'@chakra-ui/react';
import { Text } from '@chakra-ui/layout';

const Paragraph = ({
  children,
  ...props
}: PropsWithChildren<TextProps>) => (
  <Text 
    mb={4}
    sx={{
      '&:last-child': {
        mb: 0,
      }
    }}
    {...props}
  >
    {children}
  </Text>
);

export default Paragraph;