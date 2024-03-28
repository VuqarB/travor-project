import HeroWrapper from "@/components/HeroWrapper"
import DiscountPackages from "./(components)/DiscountPackages"
import Funfact from "@/components/ui/Funfact"
import Newsletter from "@/components/Newsletter"

export const metadata = {
    title: "Discount packages",
    description: "discount-packages description"
}

export default function page() {
    return (
        <>
            <HeroWrapper title='Discount' subtitle='Discount Package' />
            <DiscountPackages />
            <Funfact />
            <Newsletter />
        </>
    )
}