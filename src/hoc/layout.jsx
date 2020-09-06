import React from 'react'
import { Header } from '../components'
import { Footer } from '../components'

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer/>
        </>
    );
}

export default Layout;