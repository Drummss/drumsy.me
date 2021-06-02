import { SlideFade } from "@chakra-ui/transition";
import Head from "next/head";
import { PropsWithChildren } from "react";

const Page = (props: PropsWithChildren<{
  pageTitle?: string,
}>) => {
  return (<>
    <Head>
      {props.pageTitle &&
        <title>{props.pageTitle} - Drumsy.me</title>
      }
    </Head>
    <SlideFade in={true}>
      {props.children}
    </SlideFade>
  </>);
}

export default Page;