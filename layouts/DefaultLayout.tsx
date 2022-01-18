import { PropsWithChildren } from 'react';

import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react';
import { Navbar, Waves } from '../components/Global';
import { useMousePosition } from '../hooks/useMousePosition';
import { useViewportDimentions } from '../hooks/useViewportDimentions';

const DebugInformation = () => {
  const mousePosition = useMousePosition();
  const viewportDimentions = useViewportDimentions();

  return (
    <Box pos='absolute'>
      {mousePosition != null && (
        <Text>
          MouseX: {mousePosition.x}, MouseY: {mousePosition.y}
        </Text>
      )}
      {viewportDimentions && (
        <Text>
          Width: {viewportDimentions.width}, Height: {viewportDimentions.height}
        </Text>
      )}
    </Box>
  );
};

const DefaultLayout = (props: PropsWithChildren<{}>) => {
  return (
    <>
      <Box zIndex={-1} pos='fixed' width='100vw' top='0' left='0'>
        {/* <DebugInformation /> */}
        <Waves
          waveDensity={4}
          waveCount={4}
          startColour={useColorModeValue('#ffeee8', '#37183e')}
          endColour={useColorModeValue('#e1cefd', '#111933')}
        />
      </Box>
      <Container maxW='container.xl' mb={20}>
        <Navbar />

        <Box>{props.children}</Box>
      </Container>
    </>
  );
};

export default DefaultLayout;
