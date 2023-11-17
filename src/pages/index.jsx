import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import IntroSection from '../../components/mainPage/introSection/introSection';
import Technologies from '../../components/mainPage/technologies/technologies';


function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

function MainPage() {
    return (
        <>
            <Head>
                <title>Daniel's Portfolio</title>
            </Head>
            <IntroSection />
            <Technologies />
        </>
    );
}

export default MainPage