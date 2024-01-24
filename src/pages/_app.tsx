import { AppProps } from 'next/app';
import '../styles/globals.css';

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={'__aakash'}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" />
            </Head>
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;