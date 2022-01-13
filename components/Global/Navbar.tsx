import React from 'react';

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

import { Link } from '../Base';
import { GithubLogo } from '../Icons/GithubIcon';
import ColorModeButton from '../ColorMode/ColorModeButton';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavButtons = () => {
  return (<>
    <Link href='https://github.com/Drummss' rel='noreferrer' target='_blank'>
      <IconButton
        icon={<GithubLogo/>}
        aria-label='Github Link'
      />
    </Link>
    <ColorModeButton />
  </>);
}

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      pt={10}
      pb={14}
      justifyContent='space-between'
      alignItems='center'
    >
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
      <HStack 
        spacing={4}
        display={['none', 'none', 'flex', 'flex']}
      >
        <Link href='/'>
          Home
        </Link>
        <Tooltip hasArrow label='Not Implmented Yet'>
          <Box _focus={{}}>
            <Link>
              Blog
            </Link>
          </Box>
        </Tooltip>
        <Link href='/my-projects'>
          My Projects
        </Link>
        <Spacer />
        <NavButtons />
      </HStack>
      <HStack 
        spacing={4}
        display={['flex', 'flex', 'none', 'none']}
      >
        <NavButtons />
        <IconButton
          aria-label='Navigation Menu Toggle'
          icon={<HamburgerIcon/>}
          colorScheme='telegram'
          onClick={onOpen}
        />

        <Drawer
          isOpen={isOpen}
          placement='top'
          size='full'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              Menu
            </DrawerHeader>

            <DrawerBody>
              <VStack
                spacing={2}
                fontSize={22}
                alignItems='start'
              >
                <Link href='/' onClick={onClose}>
                  Home
                </Link>
                <Tooltip hasArrow label='Not Implemented Yet' placement='right'>
                  <Box display='inline-block' _focus={{}}>
                    <Link>
                      Blog
                    </Link>
                  </Box>
                </Tooltip>
                <Link href='/my-projects' onClick={onClose}>
                  My Projects
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Flex>
  );
}

export default Navbar;