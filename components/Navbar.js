import React from 'react'
import Link from "next/link";

export const Navbar = () => {
    return(
        <nav className="flex items-center justify-between bg-gray-200 py-4 px-8 w-full">
            <div className="flex-1">
                <Link href='/' className="btn btn-ghost normal-case text-xl">Quoted</Link>
            </div>
            <div className="flex space-x-4">
                <ul className="flex space-x-4">
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
        </nav>
    )
}
