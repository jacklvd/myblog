import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'My Blog',
    description: 'Author: Jack Vo',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <body className={inter.className}>
                <NavBar />
                {children}
                <footer className="bg-white rounded-lg m-4">
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
                        © 2023{' '}
                        <a
                            href="https://www.linked.com/in/itsmejack"
                            className="hover:underline"
                        >
                            Jack Vo™
                        </a>
                        . All Rights Reserved.
                    </span>
                </footer>
            </body>
        </html>
    )
}
