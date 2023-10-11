import React from 'react'
import Image from 'next/image'
import Bookshelf from '../../assets/img/book-image.jpg'

const Intro = () => {
    return (
        <section className="max-w-7xl mt-11 ml-auto mr-auto justify-center">
            <div className="px-5 py-10 mx-auto grid intro">
                <div className="mt-3">
                    <Image
                        src={Bookshelf}
                        alt="bookshelf"
                        priority={true}
                        className="rounded-3xl book-image object-cover mx-auto"
                    />
                </div>
                <div className="content mx-auto">
                    <h1 className="text-[2rem]">About Website</h1>
                    <p>
                        Hello, I&apos;m Jack Vo, an undergraduate Computer
                        Science major at the University of Cincinnati. I&apos;m
                        glad that you&apos;re here to read my blogs. I use this
                        blog website to document random things from my work, my
                        life, and my knowledge and share my story to the world.
                        This platform is not only a place for me to express
                        myself and personalize my experience, but it also serves
                        as a place for me to revise my knowledge and learn new
                        things. I hope you enjoy reading my blogs!
                    </p>
                    <br />
                    <p>
                        This blog website is built using Next.js and GitHub
                        GraphQL. I use Next.js to build the frontend of the
                        website and GitHub GraphQL to fetch my blogs from my
                        GitHub repository. I use Tailwind CSS to style my
                        website. I use Vercel to deploy my website.
                    </p>
                    <br />
                    <h1 className="text-[2rem]">Contact</h1>
                    <p>
                        If you have any questions or want to connect with me,
                        please feel free to contact me via email or LinkedIn.
                        I&apos;m always open to new opportunities and new
                        connections.
                    </p>
                    <br />
                    <p>
                        Email:{' '}
                        <a
                            href="mailto:volg@mail.uc.edu"
                            className="hover:underline"
                        >
                            volg@mail.uc.edu
                        </a>
                    </p>
                    <p>
                        LinkedIn:{' '}
                        <a
                            href="https://www.linkedin.com/in/itsmejack/"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin.com/in/itsmejack/
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Intro
