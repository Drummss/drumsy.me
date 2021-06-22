import React, { PropsWithChildren } from 'react';
import NextLink from 'next/link';

import { Button, ButtonGroup } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Flex, Heading, Link, Spacer, Text, VStack } from '@chakra-ui/layout';
import { AspectRatio, Image, SimpleGrid, Skeleton } from '@chakra-ui/react';

import Page from '../../components/Base/Page';
import DefaultLayout from '../../layouts/DefaultLayout';

type ProjectCardProps = {
  children: React.ReactNode;
  imageSrc?: string;
  projectPage?: string;
  githubLink?: string;
}

const ProjectCard = ({
  children,
  imageSrc,
  projectPage,
  githubLink,
}: ProjectCardProps) => {
  return (
    <Flex
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      direction='column'
    >
      {imageSrc && 
        <AspectRatio maxW='full' ratio={2/1}>
          <Image 
            src={imageSrc} 
            fallback={<Skeleton w='full' h='full' />}
          />
        </AspectRatio>
      }
      <Flex 
        p={4}
        flexGrow={1}
        direction='column'
        justifyContent='space-between'
      >
        <Text>
          {children}
        </Text>
        {(projectPage || githubLink) &&
          <ButtonGroup mt={4}>
            {projectPage &&
              <NextLink href={projectPage} passHref>
                <Link rel='noreferrer'>
                  <Button colorScheme={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')} variant='outline' size='sm'>Learn More</Button>
                </Link>
              </NextLink>
            }
            {githubLink &&
              <Link href={githubLink} rel='noreferrer' target='_blank'>
                <Button colorScheme={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')} variant='outline' size='sm'>GitHub Page</Button>
              </Link>
            }
          </ButtonGroup>
        }
      </Flex>
    </Flex>
  );
}

const CurrentProjects = () => {
  return (
    <Page pageTitle='My Projects'>
      <Text>
        An incomplete list of things that I am working on or have worked on. To find more checkout my github page or contact me to ask me questions.
      </Text>

      <Spacer h={6} />

      <Heading mb={4} size='md' fontWeight='medium'>
        My Current Projects
      </Heading>

      <Text>
        These are the projects that I am currently working on.
      </Text>

      <Spacer h={4} />

      <SimpleGrid
        columns={[1,1,2,3]}
        gap={4}
      >
        <ProjectCard
          imageSrc='./projects/pandabot/banner_1024x512.png'
          projectPage='/my-projects/pandabot'
        >
          A utility bot for Discord in the early stages of development. It is has a web dashboard and an API service for resource access.
        </ProjectCard>
        <ProjectCard
          imageSrc='./projects/unkn-in/banner_1024x512.png'
          projectPage='/my-projects/unkn-in'
        >
          <Text>
            A private image hosting service made with Laravel. I have plans to remake this using ReactJS and microservice architechture.
          </Text>
        </ProjectCard>
        <ProjectCard
          imageSrc='./projects/drumsy-me/banner_1024x512.png'
          githubLink='https://github.com/Drummss/drumsy.me'
        >
          <Text>
            It's this website... yeah you can go look at the source. Enjoy!
          </Text>
        </ProjectCard>
      </SimpleGrid>

      <Spacer h={8}/>

      <Heading mb={4} size='md' fontWeight='medium'>
        Legacy Projects
      </Heading>
      
      <Text>
        These are some of my old projects. They are no longer being worked on in any capacity to the point that they may not work.
      </Text>

      <Spacer h={4} />

      <SimpleGrid
        columns={[1,1,2,3]}
        gap={4}
      >
        <ProjectCard
          imageSrc='./projects/unknown-infernos/banner_1024x512.png'
          projectPage='/my-projects/unknown-infernos'
        >
          <Text>
            The website for an old gaming community I used to run. Not very pretty but it helped my build on the fundamentals.
          </Text>
        </ProjectCard>
      </SimpleGrid>
    </Page>
  );
}

CurrentProjects.layout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)

export default CurrentProjects;