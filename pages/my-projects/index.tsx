import React from 'react';
import NextLink from 'next/link';

import { Button, ButtonGroup } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/layout';
import { AspectRatio, Image, SimpleGrid, Skeleton } from '@chakra-ui/react';

import DefaultLayout from '../../layouts/DefaultLayout';
import Page from '../../components/Base/Page';
import {
  TechIconDiscordJS,
  TechIconDocker,
  TechIconLaravel,
  TechIconNestJS,
  TechIconNextJS,
  TechIconPrismaIO,
  TechIconReactJS,
  TechIconTailwind,
  TechIconTypeScript,
} from '../../components/Technologies';
import { Link } from '../../components/Base';

type ProjectCardProps = {
  children: React.ReactNode;
  imageSrc?: string;
  projectPage?: string;
  githubLink?: string;
  comingSoon?: boolean;
  techIcons?: React.ReactNode[];
};

const ProjectCard = ({
  children,
  imageSrc,
  projectPage,
  githubLink,
  comingSoon,
  techIcons,
}: ProjectCardProps) => {
  return (
    <Flex
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      direction='column'
    >
      {imageSrc && (
        <AspectRatio maxW='full' ratio={2 / 1}>
          <Image src={imageSrc} fallback={<Skeleton w='full' h='full' />} />
        </AspectRatio>
      )}
      <Flex flexGrow={1} direction='column' justifyContent='space-between'>
        {techIcons?.length > 0 && (
          <Box p={4} bg={useColorModeValue('blackAlpha.100', 'blackAlpha.300')}>
            <Text
              mb={1}
              color={useColorModeValue('gray.600', 'gray.400')}
              fontSize='smaller'
            >
              Key Technologies
            </Text>
            <HStack spacing={4} fontSize='1.1rem'>
              {techIcons}
            </HStack>
          </Box>
        )}
        <Text p={4}>{children}</Text>
        {(projectPage || githubLink || comingSoon) && (
          <ButtonGroup p={4}>
            {comingSoon && (
              <Button
                colorScheme={useColorModeValue(
                  'blackAlpha.800',
                  'whiteAlpha.800'
                )}
                variant='outline'
                size='sm'
                disabled={true}
              >
                More Information Soon
              </Button>
            )}
            {projectPage && (
              <NextLink href={projectPage} passHref>
                <Link rel='noreferrer'>
                  <Button
                    colorScheme={useColorModeValue(
                      'blackAlpha.800',
                      'whiteAlpha.800'
                    )}
                    variant='outline'
                    size='sm'
                  >
                    Learn More
                  </Button>
                </Link>
              </NextLink>
            )}
            {githubLink && (
              <Link href={githubLink} rel='noreferrer' target='_blank'>
                <Button
                  colorScheme={useColorModeValue(
                    'blackAlpha.800',
                    'whiteAlpha.800'
                  )}
                  variant='outline'
                  size='sm'
                >
                  GitHub Page
                </Button>
              </Link>
            )}
          </ButtonGroup>
        )}
      </Flex>
    </Flex>
  );
};

const CurrentProjects = () => {
  return (
    <Page pageTitle='My Projects'>
      <Text>
        An incomplete list of things that I am working on or have worked on. To
        find more checkout my github page or contact me to ask me questions.
      </Text>

      <Spacer h={6} />

      <Heading mb={4} size='md' fontWeight='medium'>
        My Current Projects
      </Heading>

      <Text>These are the projects that I am currently working on.</Text>

      <Spacer h={4} />

      <SimpleGrid columns={[1, 1, 2, 3]} gap={4}>
        <ProjectCard
          imageSrc='./projects/pandabot/banner_1024x512.png'
          projectPage='/my-projects/pandabot'
          techIcons={[
            <TechIconDiscordJS />,
            <TechIconDocker />,
            <TechIconNestJS />,
            <TechIconNextJS />,
            <TechIconPrismaIO />,
            <TechIconReactJS />,
            <TechIconTypeScript />,
          ]}
        >
          A utility bot for Discord in the early stages of development. It is
          has a web dashboard and an API service for resource access.
        </ProjectCard>
        <ProjectCard
          imageSrc='./projects/unkn-in/banner_1024x512.png'
          projectPage='/my-projects/unkn-in'
          techIcons={[<TechIconLaravel />, <TechIconTailwind />]}
        >
          <Text>
            A private image hosting service made with Laravel. I have plans to
            remake this using ReactJS and microservice architechture.
          </Text>
        </ProjectCard>
        <ProjectCard
          imageSrc='./projects/drumsy-me/banner_1024x512.png'
          githubLink='https://github.com/Drummss/drumsy.me'
          techIcons={[
            <TechIconNextJS />,
            <TechIconReactJS />,
            <TechIconTypeScript />,
          ]}
        >
          <Text>
            It's this website... yeah you can go look at the source. Enjoy!
          </Text>
        </ProjectCard>
      </SimpleGrid>

      <Spacer h={8} />

      <Heading mb={4} size='md' fontWeight='medium'>
        Legacy Projects
      </Heading>

      <Text>
        These are some of my old projects. They are no longer being worked on in
        any capacity to the point that they may not work.
      </Text>

      <Spacer h={4} />

      <SimpleGrid columns={[1, 1, 2, 3]} gap={4}>
        <ProjectCard
          imageSrc='./projects/unknown-infernos/banner_1024x512.png'
          projectPage='/my-projects/unknown-infernos'
        >
          The website for an old gaming community I used to run. Not very pretty
          but it helped my build on the fundamentals.
        </ProjectCard>
        <ProjectCard
          imageSrc='./projects/araknofobik/banner_1024x512.png'
          comingSoon
        >
          One of the first games I made in Unity in collaboration with an
          artist. I'm still proud of it but the project drifted as was never
          completed.
        </ProjectCard>
      </SimpleGrid>
    </Page>
  );
};

CurrentProjects.layout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default CurrentProjects;
