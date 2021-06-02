import { Heading, Spacer, Text, VStack } from '@chakra-ui/layout';
import Page from '../components/Base/Page';
import DefaultLayout from '../layouts/DefaultLayout';

const Home = () => {
  return (
    <Page>
      <VStack
        display='block'
        spacing={2}
      >
        <Heading>
          Welcome to my website.
        </Heading>
        <Text>
          People know me as Drummss and I like to code things.
        </Text>
        <Spacer h={2}/>
        <Heading size='md' fontWeight='medium'>
          What I have done.
        </Heading>
        <Text>
          I have dabbled in a large range of languages and have spent a good bit of time running gaming communities in the past. Languages I have some experience with are Javascript/Typescript, C#, PHP, HTML, Lua and Actionscript 3. When I was younger I was fairly determined to become a game developer. I still enjoy game development but as of late I have found developing websites and bots for Discord to be very fun. Where I consider myself a fullstack developer most of my experience lately has been on the frontend. However my main side project right now - Pandabot - has allowed me an opportunity to work with a full stack once again. I also have some experience working with servers - mostly CentOS 7.
        </Text>
      </VStack>
      <Spacer h={8}/>
      <Text fontSize='smaller'>
        It's looking pretty empty down here... check back another time and perhaps I will have added more things to look at!
      </Text>
    </Page>
  )
}

Home.layout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
);

export default Home;
