import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/layout';

export type LinkProps = PropsWithChildren<ChakraLinkProps>;

const Link = (props: PropsWithChildren<ChakraLinkProps>) => {
  return (
    <NextLink href={props.href ?? '#'} passHref legacyBehavior>
      <ChakraLink
        _focus={{
          boxShadow: 'none',
        }}
        {...props}
      >
        {props.children}
      </ChakraLink>
    </NextLink>
  );
};

export default Link;
