import React from 'react'
import Header from './Header'
import Footer from './Footer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }) => {
    return (
        <div className='bg-black'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
