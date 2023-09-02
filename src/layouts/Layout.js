import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <man>
            <Navbar />
            {children}
            <Footer />
        </man>
    )
}
