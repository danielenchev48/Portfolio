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



function MainPage() {
    return (
        <>
            <Head>
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