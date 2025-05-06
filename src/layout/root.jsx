import Footer from '@/components/footer'
import Header from '@/components/header/header'
import React, { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'

const RootLayout = () => {
    const pathName = useLocation().pathname
    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.remove('home1', 'home2', 'about__page')
        if (pathName === '/') {
            body.classList.add('home1')
        }
        else if (pathName === '/home-2') {
            body.classList.add('home2')
        }
        else if (pathName === '/about') {
            body.classList.add('about__page')
        }
    }, [pathName])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default RootLayout