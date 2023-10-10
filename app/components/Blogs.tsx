import { BlogPost } from '../../types/blog'
import { getBlogs } from '../../server/blogs'
import BlogPreview from './BlogReview'
import React from 'react'

const Blogs = async () => {
    let blogs: BlogPost[] = await getBlogs()
    return (
        <>
            <section className="justify-center text-[1.15rem] mt-12 max-w-7xl">
                <h1 className='text-[3rem] text-center'>Blogs</h1>
                <div className='grid .grid-cols-3 items-center'>
                    {blogs.map((blog: BlogPost) => {
                        return (
                            <div
                                key={blog.id}
                                className="max-w-[28em] max-h-[20em] mx-6 mb-6 bg-neutral-300 text-zinc-800 rounded-md p-4 hover:bg-neutral-500 hover:text-neutral-300 transition-all duration-300"
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