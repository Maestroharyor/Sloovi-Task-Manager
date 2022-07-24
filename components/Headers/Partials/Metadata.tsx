import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  metadescription?: string;
  imageUrl?: string;
};

const Metadata = ({ title, metadescription, imageUrl }: Props) => {
  const router = useRouter();
  let titleView, description;
  if (title) {
    titleView = `${title} | ${process.env.title}`;
  } else {
    titleView = `${process.env.title} | ${process.env.tagline}`;
  }

  if (metadescription) {
    description = metadescription;
  } else {
    description = process.env.titleDescription;
  }
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maxiumum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={`${description}`} />
      <title>{titleView}</title>
      <link rel="icon" href="/img/favicon.png" />
    </Head>
  );
};

export default Metadata;
