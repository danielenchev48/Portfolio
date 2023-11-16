import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import fullLogo from '../../assets/images/fullLogo.png'


function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

function MainPage() {
    return (
        <>
            <Head>
                <title>Daniel's Portfolio</title>
            </Head>
            <div className='introSection'>
                <div className='myNameSection'>
                    <Image src={fullLogo} width={140} height={100} alt="myLogo" />
                    <p className='myName'>Daniel Enchev</p>
                </div>
            </div>
        </>
    );
}

export default MainPage