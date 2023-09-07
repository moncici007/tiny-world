import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./navigator.module.css"

export default function Navigator({title, handleHomeDarkMode}) {

    const [darkMode, setDarkMode] = useState(true)

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
        handleHomeDarkMode()
    }

    // useEffect(handleDarkMode, darkMode)
    
    return (
        <div className={styles.area}>
            
                <div className={styles.left_align}>
                    <h1 className={darkMode ? (`${styles.font_white}`) : (`${styles.font_dark}`)}>{title}</h1>
                </div>
                <div className={styles.right_align}>
                    <span>  { title=='Public' ? (<><span className={darkMode ? (`${styles.font_white}`) : (`${styles.font_dark}`)}>Public</span></>):(<><Link href='/'><span className={darkMode ? (`${styles.font_white}`) : (`${styles.font_dark}`)}>Public</span></Link></>) } </span>
                    <span>  { title=='Blog' ? (<><span className={darkMode ? (`${styles.font_white}`) : (`${styles.font_dark}`)}>Blog</span></>):(<><Link href='/blog'><span className={darkMode ? (`${styles.font_white}`) : (`${styles.font_dark}`)}>Blog</span></Link></>) } </span>
                    <span>  { title=='About' ? (<><span className={darkMode ? (`${styles.font_white}`) : (`${styles.font_dark}`)}>About</span></>):(<><Link href='/'><span className={darkMode ? (`${styles.font_white}`) : (`${styles.font_dark}`)}>About</span></Link></>) } </span>
                    <span>  { title=='Feeds' ? (<><span className={darkMode ? (`${styles.font_white}`) : (`${styles.font_dark}`)}>Feeds</span></>):(<><Link href='/'><span className={darkMode ? (`${styles.font_white}`) : (`${styles.font_dark}`)}>Feeds</span></Link></>) } </span>
                    <span>  { title=='Contact' ? (<><span className={darkMode ? (`${styles.font_white}`) : (`${styles.font_dark}`)}>Contact</span></>):(<><Link href='/'><span className={darkMode ? (`${styles.font_white}`) : (`${styles.font_dark}`)}>Contact</span></Link></>) } </span>
                    <span role="button" onClick={handleDarkMode} aria-label="Toggle Dark Mode" tabindex="0">
                        {
                            darkMode ? (<svg fill="none" viewBox="3 3 18 18" width="12" height="12" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="white" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>) : (<svg fill="none" viewBox="2 2 20 20" width="12" height="12" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="black" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>)
                        }
                    </span>
                </div>
        </div>
    )
}