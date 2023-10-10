import React from 'react'
import Image from 'next/image'
import Bookshelf from '../../assets/img/bookshelf.jpg'

const Intro = () => {
    return (
        <section className='max-w-7xl mt-10'>
            <div className='h-screen px-5 py-10 mx-auto grid intro justify-center'>
                <div className='max-w-[680px]'>
                    <Image src={Bookshelf} alt='bookshelf' width={500} height={300} className='rounded-3xl book-image object-cover justify-self-center' />
                </div>
                <div className='mx-12 max-w-[600px]'>
                    <h1 className='text-[2rem]'>About Website</h1><br />
                    <p>
                        Hello, I&apos;m Jack Vo, an undergraduate Computer Science major at the University of Cincinnati. I&apos;m glad that you&apos;re here
                        to read my blogs. I use this blog website to document random things from my work, my life, and my knowledge and share my story to the world.
                        This platform is not only a place for me to express myself and personalize my experience, but it also serves as a place for me to revise my knowledge
                        and learn new things. I hope you enjoy reading my blogs!
                    </p><br />
                    <p>
                        This blog website is built using Next.js and GitHub GraphQL. I use Next.js to build the frontend of the website and GitHub GraphQL to fetch my blogs
                        from my GitHub repository. I use Tailwind CSS to style my website. I use Vercel to deploy my website.
                    </p><br />
                    <h1 className='text-[2rem]'>Contact</h1>
                </div>
            </div>
        </section>

    )
}

export default Intro