import React, { PropsWithChildren } from 'react';

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { Link } from '../Base';
import { GithubLogo } from '../Icons/GithubIcon';
import ColorModeButton from '../ColorMode/ColorModeButton';
import { LinkProps } from '../Base/Link';

const NavButtons = () => {
  return (
    <>
      <Link href='https://github.com/Drummss' rel='noreferrer' target='_blank'>
        <IconButton icon={<GithubLogo />} aria-label='Github Link' />
      </Link>
      <ColorModeButton />
    </>
  );
};

const NavLink = ({
  href,
  children,
  ...props
}: PropsWithChildren<LinkProps>) => {
  return (
    <Link
      href={href}
      {...props}
      padding={2}
      borderRadius={5}
      _hover={{
        background: useColorModeValue('blackAlpha.100', 'whiteAlpha.100'),
      }}
      _focus={{
        background: useColorModeValue('blackAlpha.100', 'whiteAlpha.100'),
      }}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex pt={10} pb={14} justifyContent='space-between' alignItems='center'>
      <Link href='/' _hover={{ textDecor: 'none' }}>
        <Heading
          size='xl'
          lineHeight={1.3}
          bgGradient={useColorModeValue(
            'linear(to-r, #ff09ab, #f7923f)',
            'linear(to-r, #de31a3, #de611e)'
          )}
          bgClip='text'
          variant='page-title'
        >
          Drumsy.me
        </Heading>
      </Link>
      <HStack spacing={2} display={['none', 'none', 'flex', 'flex']}>
        <NavLink href='/'>Home</NavLink>
        <Tooltip hasArrow label='Not Implemented Yet'>
          <Box _focus={{}}>
            <NavLink>Blog</NavLink>
          </Box>
        </Tooltip>
        <NavLink href='/my-projects'>My Projects</NavLink>
        <Spacer />
        <NavButtons />
      </HStack>
      <HStack spacing={4} display={['flex', 'flex', 'none', 'none']}>
        <NavButtons />
        <IconButton
          aria-label='Navigation Menu Toggle'
          icon={<HamburgerIcon />}
          colorScheme='telegram'
          onClick={onOpen}
        />

        <Drawer isOpen={isOpen} placement='top' size='full' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <VStack spacing={2} fontSize={22} alignItems='start'>
                <NavLink href='/' onClick={onClose}>
                  Home
                </NavLink>
                <Tooltip hasArrow label='Not Implemented Yet' placement='right'>
                  <Box display='inline-block' _focus={{}}>
                    <Link>Blog</Link>
                  </Box>
                </Tooltip>
                <NavLink href='/my-projects' onClick={onClose}>
                  My Projects
                </NavLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Flex>
  );
};

export default Navbar;
