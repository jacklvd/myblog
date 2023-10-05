import { BlogPost } from '../types/blog'
import { getBlogs } from '../server/blogs'
import BlogPreview from './components/BlogReview'

export default async function Home() {
    let blogs: BlogPost[] = await getBlogs()

    return (
        <main className="layout">
            <section>
                <div className="mt-3 text-center">
                    <h1 className="text-[3rem]"> Welcome to Jack Blog </h1>
                    <p>
                        Just daily random blogs about my life, my thoughts, and
                        my work.
                    </p>
                </div>
            </section>
            <section className="flex flex-wrap items-center justify-center text-[1.15rem] mt-12">
                {blogs.map((blog: BlogPost) => {
                    return (
                        <div
                            key={blog.id}
                            className="max-w-[28em] max-h-[20em] overflow-hidden mx-6 mb-6 bg-neutral-300 text-zinc-800 rounded-md p-4 hover:bg-neutral-500 hover:text-neutral-300 transition-all duration-300"
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
            </section>
        </main>
    )
}
