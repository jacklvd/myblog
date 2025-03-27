/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Bookshelf from '@/assets/img/book-image.jpg';
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";


const Intro = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container px-4 mx-auto mt-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                    About This Blog
                                </h2>
                                <div className="w-20 h-1 bg-primary rounded mb-6"></div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Hello, I'm Jack Vo, an undergraduate Computer Science major at the University of Cincinnati.
                                    I'm glad that you're here to read my blogs. I use this blog website to document random
                                    things from my work, my life, and my knowledge and share my story to the world.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    This platform is not only a place for me to express myself and personalize my experience,
                                    but it also serves as a place for me to revise my knowledge and learn new things.
                                    I hope you enjoy reading my blogs!
                                </p>
                            </div>

                            <div className="pt-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    This blog website is built using Next.js and GitHub GraphQL. I use Next.js to build the
                                    frontend of the website and GitHub GraphQL to fetch my blogs from my GitHub repository.
                                    I use Tailwind CSS with shadcn/ui components to style my website. I use Vercel to deploy my website.
                                </p>
                            </div>

                            <div className="pt-4">
                                <h3 className="text-2xl font-bold tracking-tight mb-4">Contact</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    If you have any questions or want to connect with me, please feel free to contact me via
                                    email or LinkedIn. I'm always open to new opportunities and new connections.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                    <Button asChild variant="outline" className="gap-2">
                                        <a href="mailto:volg@mail.uc.edu">
                                            <Mail className="h-4 w-4" />
                                            <span>Email Me</span>
                                        </a>
                                    </Button>

                                    <Button asChild variant="outline" className="gap-2">
                                        <a
                                            href="https://www.linkedin.com/in/itsmejack/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Linkedin className="h-4 w-4" />
                                            <span>LinkedIn</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border">
                            <Image
                                src={Bookshelf}
                                alt="Bookshelf showing my interests and personality"
                                fill
                                priority={true}
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Intro;