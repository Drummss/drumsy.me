import React from 'react';

import { Button, ButtonGroup } from '@chakra-ui/button';
import { Link, Flex, Text, VStack } from '@chakra-ui/layout';
import { Heading, useColorModeValue } from '@chakra-ui/react';

import Page from '../../../components/Base/Page';
import DefaultLayout from '../../../layouts/DefaultLayout';

const ProjectPandabot = () => {
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
            <Link href='http://pandabot.me:3000' rel='noreferrer' target='_blank'>
              <Button colorScheme={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')} variant='outline' size='sm'>Dashboard Preview</Button>
            </Link>
          </ButtonGroup>
        </Flex>
        <Text>
          Pandabot is my latest project. Mainly it is a Discord bot made in Typescript but it is actually a fullstack project. It is in very early stages of development but I have started the ground works for a web dashboard for the bot. Like this website the dashboard is made with React/NextJS. I have also created a standalone API service so the dashboard and bot access the same data. All of this is deployed on a VPS that I rent using Docker.
        </Text>
        <Text fontSize='sm'>
          The repository for this is currently closed source but if you are an employer feel free to contact me to request more information about the source code.
        </Text>
      </VStack>
    </Page>
  );
}

ProjectPandabot.layout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)

export default ProjectPandabot;