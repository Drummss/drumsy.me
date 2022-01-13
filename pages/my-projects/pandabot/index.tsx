import React from 'react';

import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Spacer,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import Page from '../../../components/Base/Page';
import DefaultLayout from '../../../layouts/DefaultLayout';
import Paragraph from '../../../components/Base/Paragraph';

import {
  DiscordJSIcon,
  DockerIcon,
  NextJSIcon,
  NestJSIcon,
  PrismaIOIcon,
  ReactIcon,
  TypeScriptIcon,
} from '../../../components/Icons';

const ProjectPandabot = () => {
  return (
    <Page pageTitle='PandaBot'>
      <Flex
        flexDirection={['column', 'column', 'row', 'row']}
        justifyContent='space-between'
      >
        <Heading mb={[4, 4, 0, 0]}>About PandaBot</Heading>
        <ButtonGroup>
          <Link href='http://pandabot.me:3000' rel='noreferrer' target='_blank'>
            <Button
              colorScheme={useColorModeValue(
                'blackAlpha.800',
                'whiteAlpha.800'
              )}
              variant='outline'
              size='sm'
            >
              Dashboard Preview
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
      <Spacer h={4} />
      <Flex direction={['column', 'column', 'row', 'row']}>
        <VStack spacing={8} alignItems='stretch'>
          <Box aria-label='Description'>
            <Paragraph>
              Pandabot is my latest project. The project can be divided into
              three parts - a Discord bot, web dashboard, and an API service.
              Each part is made with Javascript/TypeScript. All of this is
              deployed on a VPS using Docker and docker-compose.
            </Paragraph>
            <Paragraph
              fontSize='sm'
              color={useColorModeValue('blue.600', 'blue.400')}
              aria-label='Note about source access'
            >
              The repository for this is currently closed source but, if you are
              an employer feel free to contact me to request more information
              about the source code.
            </Paragraph>
          </Box>

          <Box aria-label='Discord Bot'>
            <Heading size='md'>Discord Bot</Heading>
            <Spacer h={4} />
            <Paragraph>
              Everything in this stack is built for and around this bot.
              Currently, it is a utility bot for Discord server owners to
              augment their community with information. The main feature right
              now is being able to create embed presets, publish them into
              channels, and update them without needing to repost them.
            </Paragraph>
            <Paragraph>
              Future plans for this bot include a range of moderation features,
              role management, and potentially a custom command system.
            </Paragraph>
          </Box>

          <Box aria-label='Dashboard'>
            <Heading size='md'>Dashboard</Heading>
            <Spacer h={4} />
            <Paragraph>
              Sometimes, typing is hard. Although Discord has recently added a
              whole range of new ways to interact with users it isn't always
              easy getting things done from within a text chat context. The
              dashboard is being made to mitigate these problems as much as
              possible, and create great user experiences for configuring and
              interacting with the bot.
            </Paragraph>
          </Box>

          <Box aria-label='API Service'>
            <Heading size='md'>API Service</Heading>
            <Spacer h={4} />
            <Paragraph>
              A NestJS API service that powers both dashboard and bot in this
              stack. At this moment in time it is a single monolithic API
              service that handles data going in and out of a PostgreSQL
              database.
            </Paragraph>

            <Paragraph>
              In the future I plan to overhaul the backend of this stack with
              microservices that communicate updates to each other using an
              event bus.
            </Paragraph>
          </Box>
        </VStack>

        <Box
          p={4}
          ml={[0, 0, 4, 4]}
          mt={[4, 4, 0, 0]}
          w={['full', 'full', '280px', '280px']}
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          float='right'
          alignSelf='start'
          flexShrink={0}
        >
          <Heading size='md' textAlign='center'>
            Key Technologies
          </Heading>
          <Divider
            my={2}
            borderColor={useColorModeValue('gray.800', 'gray.200')}
          />
          <List spacing={2}>
            <ListItem>
              <ListIcon as={DiscordJSIcon} />
              DiscordJS
            </ListItem>
            <ListItem>
              <ListIcon as={DockerIcon} color='docker' />
              Docker
            </ListItem>
            <ListItem>
              <ListIcon as={NestJSIcon} color='nestjs' />
              NestJS
            </ListItem>
            <ListItem>
              <ListIcon as={NextJSIcon} />
              NextJS
            </ListItem>
            <ListItem>
              <ListIcon as={PrismaIOIcon} />
              Prisma.io
            </ListItem>
            <ListItem>
              <ListIcon as={ReactIcon} color='react' />
              ReactJS
            </ListItem>
            <ListItem>
              <ListIcon as={TypeScriptIcon} />
              TypeScript
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Page>
  );
};

ProjectPandabot.layout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default ProjectPandabot;
