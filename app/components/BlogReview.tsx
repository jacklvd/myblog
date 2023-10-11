import React from 'react'
import { BlogPost } from '../../types/blog'
import BlogHeader from './BlogHeader'

const BlogPreview: React.FC<BlogPost> = (props) => {
    const { bodyText, title, createdAt, author } = props
    const previewText: string = bodyText.substring(0, 150) + '...'
    return (
        <div>
            <BlogHeader createdAt={createdAt} author={author} />
            <h2 className="font-bold"> {title} </h2>
            <p className="mt-2"> {previewText} </p>
        </div>
    )
}

export default BlogPreview
