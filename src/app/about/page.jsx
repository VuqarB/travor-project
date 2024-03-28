import Newsletter from '@/components/Newsletter'
import HeroWrapper from '@/components/HeroWrapper'
import Services from '@/components/Services'
import Discount from '@/components/Discount'
import Testimonals from '@/components/Testimonals'
import Funfact from '../../components/ui/Funfact'
import Team from './(components)/Team'
import Recommend from './(components)/Recommend'

export const metadata = {
    title: "About",
    description: "about description"
}

export default function page() {
    return (
        <>
            <HeroWrapper title='Explore the World' subtitle='About us' />
            <Recommend />
            <Services padding='pb-[60px] md:pb-[80px] cLg:pb-[100px] xl:pb-[120px]' />
            <Team />
            <Discount />
            <Testimonals />
            <Newsletter />
            <Funfact />
        </>
    )
}
