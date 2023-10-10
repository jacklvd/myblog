import Intro from './components/Intro'
import Blogs from './components/Blogs'

export default async function Home() {


    return (
        <main className="layout">
            <Intro />
            <Blogs />
        </main>
    )
}
