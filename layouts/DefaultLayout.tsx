import { PropsWithChildren } from 'react';

import { Box, Container } from '@chakra-ui/react';
import { Navbar } from '../components/Global';

const DefaultLayout = (props: PropsWithChildren<{}>) => {
  return (
    <Container maxW='container.xl' mb={20}>
      <Navbar />

      <Box>
        {props.children}
      </Box>
    </Container>
  );
}

export default DefaultLayout;