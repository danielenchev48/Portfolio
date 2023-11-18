import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import IntroSection from '../../components/mainPage/introSection/introSection';
import Technologies from '../../components/mainPage/technologies/technologies';
import Principles from '../../components/mainPage/principles/principles';
import Skills from '../../components/mainPage/technologies/skills';
import Projects from '../../components/mainPage/projects/projects';
import Methods from '../../components/mainPage/technologies/methods';
import About from '../../components/mainPage/about/about';



function MainPage() {
    return (
        <>
            <Head>
                <title>Daniel's Portfolio</title>
            </Head>
            <IntroSection />
            <Technologies />
            <Principles />
            <Skills />
            <Projects />
            <Methods />
            <About />
        </>
    );
}

export default MainPage