import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Box, Container, Flex, Heading, HStack, Spacer, VStack } from '@chakra-ui/layout';

import ColorModeButton from '../components/ColorMode/ColorModeButton';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { IconButton } from '@chakra-ui/button';
import { GithubLogo } from '../components/Icons/GithubIcon';
import Link from '../components/Base/Link';
import { Tooltip } from '@chakra-ui/tooltip';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/hooks';

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

const DefaultLayout = (props: PropsWithChildren<{}>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW='container.xl' mb={20}>
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

      <Box>
        {props.children}
      </Box>
    </Container>
  );
}

export default DefaultLayout;