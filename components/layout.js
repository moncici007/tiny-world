import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Navigator from './navigator';
import { useState } from 'react';


export default function Layout({ children, home }) {

    const [dark, setDark] = useState(true)

    const handleDarkMode = () => {
      setDark(!dark)
    }

    return (
        <div className={dark ? (`${styles.container} ${styles.container_dark}`): (`${styles.container}`)}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta 
                    name="moncici"
                    content="Learn how to build a personal website"
                />
                <meta 
                    name="og:title" 
                    content={home}
                />
            </Head>

            <Navigator title={home} handleHomeDarkMode={handleDarkMode} ></Navigator>

            <main>{children}</main>
        </div>
    )
}