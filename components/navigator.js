import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigator({title}) {

    const [darkMode, setDarkMode] = useState(true)

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(handleDarkMode, darkMode)
    
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <span>  { title=='Public' ? (<><span>Public</span></>):(<><Link href='/'>Public</Link></>) } </span>
                <span>  { title=='Blog' ? (<><span>Blog</span></>):(<><Link href='/'>Blog</Link></>) } </span>
                <span>  { title=='About' ? (<><span>About</span></>):(<><Link href='/'>About</Link></>) } </span>
                <span>  { title=='Feeds' ? (<><span>Feeds</span></>):(<><Link href='/'>Feeds</Link></>) } </span>
                <span>  { title=='Contact' ? (<><span>Contact</span></>):(<><Link href='/'>Contact</Link></>) } </span>
                <span role="button" onClick={handleDarkMode} aria-label="Toggle Dark Mode" tabindex="0">
                    {
                        darkMode ? (<svg fill="none" viewBox="3 3 18 18" width="12" height="12" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="currentColor" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>) : (<svg fill="none" viewBox="2 2 20 20" width="12" height="12" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="currentColor" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>)
                    }
                </span>
            </div>
            
        </div>
    )
}