import React from 'react';

import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';

import DefaultLayout from '../../../layouts/DefaultLayout';
import { Page, Paragraph } from '../../../components/Base';

const ProjectUnknownInfernos = () => {
  return (
    <Page pageTitle='PandaBot'>
      <Flex
        flexDirection={['column', 'column', 'row', 'row']}
        justifyContent='space-between'
      >
        <Heading mb={[2, 2, 0, 0]}>About Unknown Infernos</Heading>
        <ButtonGroup>
          <Link
            href='http://unknowninfernos.com'
            rel='noreferrer'
            target='_blank'
          >
            <Button
              colorScheme={useColorModeValue(
                'blackAlpha.800',
                'whiteAlpha.800'
              )}
              variant='outline'
              size='sm'
            >
              Unknown Infernos Website
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
      <Spacer h={4} />
      <Paragraph>
        Unknown Infernos was one of my original communities from years and years
        ago. The community is completely dormant and the website is pretty
        broken at this point as it relies on depreciated APIs. The website was
        made in PHP using my own nieve framework which handled ajax requests and
        database queries. It goes to say that I have learnt a lot from this
        project.
      </Paragraph>
      <Paragraph>
        If I think there is any room for success or I decide I am bored enough
        then I will remake this project in React/NextJS. This would be to adopt
        a microservice approach which I think would fit this project much better
        than fundamentally monolithic foundations.
      </Paragraph>
      <Paragraph fontSize='sm'>
        The repository for this is currently closed source but if you are an
        employer feel free to contact me to request more information about the
        source code. There are plans to open source this but I first need to
        make sure no sensitive information would be leaked by doing so.
      </Paragraph>
    </Page>
  );
};

ProjectUnknownInfernos.layout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default ProjectUnknownInfernos;
