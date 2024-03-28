import Newsletter from '@/components/Newsletter'
import Packages from './(components)/Packages'
import HeroWrapper from '@/components/HeroWrapper'

export const metadata = {
    title: "Packages",
    description: "packages description"
}

export default function page() {
    return (
        <>
            <HeroWrapper subtitle='our package' />
            <Packages />
            <Newsletter />
        </>
    )
}
