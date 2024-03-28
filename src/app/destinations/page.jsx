import Newsletter from '@/components/Newsletter'
import HeroWrapper from '@/components/HeroWrapper'
import Destintions from './(components)/Destintions'

export const metadata = {
    title: "Destinations",
    description: "destinations description"
}

export default function page() {
    return (
        <>
            <HeroWrapper subtitle='Our Destinations' />
            <Destintions />
            <Newsletter />
        </>
    )
}
