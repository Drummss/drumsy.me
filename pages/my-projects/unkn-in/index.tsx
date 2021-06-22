import React from 'react';

import { Button, ButtonGroup } from '@chakra-ui/button';
import { Link, Flex, Text, VStack } from '@chakra-ui/layout';
import { Heading, useColorModeValue } from '@chakra-ui/react';

import Page from '../../../components/Base/Page';
import DefaultLayout from '../../../layouts/DefaultLayout';

const ProjectUnknin = () => {
  return (
    <Page pageTitle='PandaBot'>
      <VStack
        display='block'
        spacing={4}
      >
        <Flex
          flexDirection={['column','column','row','row']}
          justifyContent='space-between'
        >
          <Heading mb={[2,2,0,0]}>
            About PandaBot
          </Heading>
          <ButtonGroup>
            <Link href='https://unkn.in' rel='noreferrer' target='_blank'>
              <Button colorScheme={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')} variant='outline' size='sm'>Unkn.In Website</Button>
            </Link>
          </ButtonGroup>
        </Flex>
        <Text>
          Unkn.In is made in Laravel and it is my answer to having somewhere to store my files and share them easily. There are other services that do this but some of them would add considerable levels of compression or have some kind of limitation such only allowing images. When I originally made this image/file sharing was much harder but as time has gone on there are plenty of services that actually do this pretty well. Right now the website is closed-access and you can only use it if I generate a registration key for you. Only myself and a handful of friends use the service as of this time.
        </Text>
        <Text>
          If I think there is any room for success or I decide I am bored enough then I will remake this project in React/NextJS. This would be to adopt a microservice approach which I think would fit this project much better than fundamentally monolithic foundations.
        </Text>
        <Text fontSize='sm'>
          The repository for this is currently closed source but if you are an employer feel free to contact me to request more information about the source code.
        </Text>
      </VStack>
    </Page>
  );
}

ProjectUnknin.layout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)

export default ProjectUnknin;