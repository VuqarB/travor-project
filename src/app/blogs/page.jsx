import Newsletter from '@/components/Newsletter'
import HeroWrapper from '@/components/HeroWrapper'
import Blogs from './(components)/Blogs'
import Funfact from '@/components/ui/Funfact'

export const metadata = {
    title: "Blogs",
    description: "blogs description"
}

export default function page() {
    return (
        <>
            <HeroWrapper subtitle='latest blog post' />
            <Blogs />
            <Funfact />
            <Newsletter />
        </>
    )
}
