import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';



function Posts() {


    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <div>
                <Link href='/'>Home</Link>
            </div>
        </>
    );
}

export default Posts