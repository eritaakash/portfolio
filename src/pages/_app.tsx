import { AppProps } from 'next/app';
import '../styles/globals.css';

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Aakash</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;