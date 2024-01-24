import React from 'react';

import SimpleShinyBg from '@/partials/bg/simpleShiny';
import Intro from '@/partials/sections/intro';

import About from '@/partials/sections/about';
import Projects from '@/partials/sections/projects';

import Contact from '@/partials/sections/contact';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Aakash</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#161B33"></meta>

        <meta name="description" content="Aakash's Portfolio Website" />
      </Head>

      <main>
        <SimpleShinyBg content={<Intro />} />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Home;