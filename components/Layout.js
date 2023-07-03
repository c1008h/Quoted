import { Navbar } from './Navbar'
import { Footer } from './Footer'

export default function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow bg-white text-black'>
                <div className="container mx-auto">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

