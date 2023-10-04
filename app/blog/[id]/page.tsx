import { getBlogDetail } from '../../../server/blogs'
import BlogHeader from '../../components/BlogHeader'
import parse from 'html-react-parser'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import detail from '../id.module.css'

export default async function BlogPost({ params }: { params: { id: string } }) {
    const { author, bodyHTML, createdAt, title } = await getBlogDetail(Number(params.id))
    return (
        <section className="layout">
            <div className="max-w-[50%]">
                <h1 className="text-center my-10 text-[2rem] font-bold">
                    {' '}
                    {title}{' '}
                </h1>
                <div className="flex justify-center mb-4">
                    <BlogHeader createdAt={createdAt} author={author} />
                </div>
                <div className={`${detail.html} flex flex-col`}>
                    {parse(bodyHTML)}
                </div>
            </div>
        </section>
    )
}
