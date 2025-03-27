import { lazy } from 'react'

const Intro = lazy(() => import('@/components/Intro'))
const Blogs = lazy(() => import('@/components/Blogs'))

export default function Home() {
    return (
        <main className="layout">
            <Intro />
            <Blogs />
        </main>
    )
}
