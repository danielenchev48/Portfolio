import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import IntroSection from '../../components/mainPage/introSection/introSection';
import Technologies from '../../components/mainPage/technologies/technologies';
import Ethics from '../../components/mainPage/ethics/ethics';
import Skills from '../../components/mainPage/technologies/skills';
import Projects from '../../components/mainPage/projects/projects';
import Methods from '../../components/mainPage/technologies/methods';
import About from '../../components/mainPage/about/about';
import Apps from '../../components/mainPage/technologies/apps';
import Certificates from '../../components/mainPage/certificates/certificates';
// import appleFavicon from '../../assets/favicon/apple-touch-icon.png';
// import favicon32 from '../../assets/favicon/favicon-32x32.png';
// import favicon16 from '../../assets/favicon/favicon-16x16.png';
// import siteWebmanifest0 from '../../assets/favicon/site.webmanifest';



function MainPage() {
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <title>Daniel's Portfolio</title>
            </Head>
            <IntroSection />
            <Technologies />
            <Ethics />
            <Skills />
            <Projects />
            <Methods />
            <About />
            <Apps />
            <Certificates />
        </>
    );
}

export default MainPage