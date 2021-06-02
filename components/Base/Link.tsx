import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/layout';

const Link = (props: PropsWithChildren<LinkProps> ) => {
  return (
    <NextLink href={props.href ?? '#'} passHref>
      <ChakraLink
        _focus={{
          boxShadow: 'none'
        }}
        {...props}
      >
        {props.children}
      </ChakraLink>
    </NextLink>
  );
}

export default Link;