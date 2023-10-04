import {
    GH_API_URL,
    GH_ACCESS_TOKEN,
    DISCUSSION_CATEGORY_ID,
} from './client/client'
import { BlogPost, BlogDetail } from '../types/blog'
import { discussionGQL, discussionDetailGql } from './gql'

export async function getBlogs() {
    const response = await fetch(GH_API_URL!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${GH_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
            query: discussionGQL(DISCUSSION_CATEGORY_ID),
        }),
        cache: 'no-store',
    })
    let res = await response.json()
    const discussions = res.data.repository.discussions.nodes
    const posts = discussions.map((discussion: any): BlogPost => {
        const {
            title,
            author,
            createdAt,
            lastEditedAt: lastEdited,
            number: id,
            bodyHTML: html,
            bodyText,
            labels,
            url: discussionUrl,
        } = discussion
        const url = `/blog/${id}`
        const authorUrl = author.url
        const authorName = author.login
        const authorAvatar = author.avatarUrl
        const post = {
            id,
            url,
            discussionUrl,
            title,
            html,
            bodyText,
            createdAt,
            lastEdited,
            author: { url: authorUrl, name: authorName, avatar: authorAvatar },
        }
        return post
    })
    return posts
}

export async function getBlogDetail(blogId: number): Promise<BlogDetail> {
    const response = await fetch(GH_API_URL!, {
        method: 'POST',
        headers: {
            Authorization: `token ${GH_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: discussionDetailGql(blogId) }),
        cache: 'no-store',
    })
    let res = await response.json()
    let discussion = res.data.repository.discussion
    const {
        author: { url: authorUrl, login: authorName, avatarUrl: authorAvatar },
        createdAt,
        title: title,
        bodyHTML: html,
    } = discussion
    const detail = {
        author: { url: authorUrl, name: authorName, avatar: authorAvatar },
        createdAt,
        title,
        bodyHTML: html,
    }
    return detail
}
