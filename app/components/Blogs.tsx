import { BlogPost } from '../../types/blog'
import { getBlogs } from '../../server/blogs'
import BlogPreview from './BlogReview'
import React from 'react'

const Blogs = async () => {
    let blogs: BlogPost[] = await getBlogs()
    return (
        <>
            <section className="text-[1.15rem] mt-12 max-w-7xl pt-24 mr-auto ml-auto justify-center">
                <h1 className="text-[3rem] text-center mb-10">Blogs</h1>
                <div className="grid blog-review ml-2 mr-2 mb-3">
                    {blogs.map((blog: BlogPost) => {
                        return (
                            <div
                                key={blog.id}
                                className="blog max-w-[28em] max-h-[20em] bg-neutral-300 text-zinc-800 rounded-md p-4 hover:bg-neutral-500 hover:text-neutral-300 transition-all duration-300"
                            >
                                <a href={blog.url} rel="noreferrer">
                                    <BlogPreview
                                        title={blog.title}
                                        bodyText={blog.bodyText}
                                        createdAt={blog.createdAt}
                                        author={blog.author}
                                    />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Blogs
