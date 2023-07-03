import React from 'react'
import Link from "next/link";

const styles = {
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    top: "0"
}

export const Navbar = () => {
    return(
        <div className={styles}>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Quoted</a>
            </div>
            <div style={{flex:'row'}}>
                <ul style={{flex:'row'}} c>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/Dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/Profile">Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
