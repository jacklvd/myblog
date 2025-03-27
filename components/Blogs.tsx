import { BlogPost } from '@/types/blog';
import { getBlogs } from '@/server/blogs';
import BlogPreview from './BlogReview';
import React from 'react';

const Blogs = async () => {
    let blogs: BlogPost[] = await getBlogs();

    return (
        <section className="py-16 md:py-24 bg-muted/30" id="blogs">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        Latest Articles
                    </h2>
                    <div className="mt-4 w-20 h-1 bg-primary rounded"></div>
                    <p className="mt-6 text-lg text-center text-muted-foreground max-w-2xl">
                        Explore my thoughts, projects, and insights on programming, tech,
                        and my journey as a Computer Science student.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog: BlogPost) => (
                        <a
                            key={blog.id}
                            href={blog.url}
                            className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                            rel="noreferrer"
                        >
                            <BlogPreview
                                id={blog.id}
                                title={blog.title}
                                bodyText={blog.bodyText}
                                createdAt={blog.createdAt}
                                author={blog.author}
                                url={blog.url}
                            />
                        </a>
                    ))}
                </div>

                {blogs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No blogs found. Check back soon!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blogs;