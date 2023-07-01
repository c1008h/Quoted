import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Quoted</a>
            </div>
            <div style={{flex:'row'}}>
                <ul style={{flex:'row'}} c>
                    <li>
                        <Link href="pages/homepage.js">Home</Link>
                    </li>
                    <li>
                        <Link href="pages/dashboard.js">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="pages/profile.js">Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <h3>Copyright (c) Chris Hong</h3>
        </>
    )
}

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}

export default Layout;