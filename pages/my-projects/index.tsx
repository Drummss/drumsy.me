import React from "react";

import { Button, ButtonGroup } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading, Link, Spacer, Text, VStack } from "@chakra-ui/layout";

import Page from "../../components/Base/Page";
import DefaultLayout from "../../layouts/DefaultLayout";

const ProjectBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      p={2}
      borderWidth={1}
      borderColor={useColorModeValue('blackAlpha.400', 'whiteAlpha.200')}
      borderRadius={8}
    >
      {children}
    </Box>
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
      <VStack display='block' spacing={4}>
        <Text>
          These are the projects that I am currently working on.
        </Text>
        <ProjectBox>
          <Heading mb={2} size='md'>
            Pandabot
          </Heading>
          <Text>
            Pandabot is my latest project. Mainly it is a Discord bot made in Typescript but it is actually a fullstack project. It is in very early stages of development but I have started the ground works for a web dashboard for the bot. Like this website the dashboard is made with React/NextJS. I have also created a standalone API service so the dashboard and bot access the same data. All of this is deployed on a VPS that I rent using Docker.
          </Text>
          <Spacer h={2}/>
          <Text fontSize='sm'>
            The repository for this is currently closed source but if you are an employer feel free to contact me to request more information about the source code.
          </Text>
          <Spacer h={4}/>
          <ButtonGroup>
            <Link href='http://pandabot.me:3000' target='_blank'>
              <Button colorScheme='green' variant='outline' size='sm'>Dashboard Preview</Button>
            </Link>
          </ButtonGroup>
        </ProjectBox>
        <ProjectBox>
          <Heading mb={2} size='md'>
            Unkn.In
          </Heading>
          <Text>
            Unkn.In is made in Laravel and it is my answer to having somewhere to store my files and share them easily. There are other services that do this but some of them would add considerable levels of compression or have some kind of limitation such only allowing images. When I originally made this image/file sharing was much harder but as time has gone on there are plenty of services that actually do this pretty well. Right now the website is closed-access and you can only use it if I generate a registration key for you. Only myself and a handful of friends use the service as of this time.
          </Text>
          <Spacer h={2}/>
          <Text>
            If I think there is any room for success or I decide I am bored enough then I will remake this project in React/NextJS. This would be to adopt a microservice approach which I think would fit this project much better than fundamentally monolithic foundations.
          </Text>
          <Spacer h={2}/>
          <Text fontSize='sm'>
            The repository for this is currently closed source but if you are an employer feel free to contact me to request more information about the source code.
          </Text>
          <Spacer h={4}/>
          <ButtonGroup>
            <Link href='https://unkn.in' target='_blank'>
              <Button colorScheme='red' variant='outline' size='sm'>Unkn.In Website</Button>
            </Link>
          </ButtonGroup>
        </ProjectBox>
      </VStack>
      <Spacer h={8}/>
      <Heading mb={4} size='md' fontWeight='medium'>
        Legacy Projects
      </Heading>
      <VStack display='block' spacing={4}>
        <Text>
          These are some of my old projects. They are no longer being worked on in any capacity to the point that they may not work.
        </Text>
        <ProjectBox>
          <Heading mb={2} size='md'>
            Unknown Infernos
          </Heading>
          <Text>
            Unknown Infernos was one of my original communities from years and years ago. The community is completely dormant and the website is pretty broken at this point as it relies on depreciated APIs. The website was made in PHP using my own nieve framework which handled ajax requests and database queries. It goes to say that I have learnt a lot from this project. 
          </Text>
          <Spacer h={2}/>
          <Text>
            If I think there is any room for success or I decide I am bored enough then I will remake this project in React/NextJS. This would be to adopt a microservice approach which I think would fit this project much better than fundamentally monolithic foundations.
          </Text>
          <Spacer h={2}/>
          <Text fontSize='sm'>
            The repository for this is currently closed source but if you are an employer feel free to contact me to request more information about the source code. There are plans to open source this but I first need to make sure no sensitive information would be leaked by doing so.
          </Text>
          <Spacer h={4}/>
          <ButtonGroup>
            <Link href='http://unknowninfernos.com' target='_blank'>
              <Button colorScheme='red' variant='outline' size='sm'>Unknown Infernos Website</Button>
            </Link>
          </ButtonGroup>
        </ProjectBox>
        <ProjectBox>
          <Text color='green.500'>
            I am yet to document the rest of my legacy projects but check back another time and I may have added more 👀
          </Text>
        </ProjectBox>
      </VStack>
    </Page>
  );
}

CurrentProjects.layout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)

export default CurrentProjects;