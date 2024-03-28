import HeroWrapper from "@/components/HeroWrapper";
import ContactInfo from "./(components)/ContactInfo";
import Newsletter from "@/components/Newsletter";

export const metadata = {
    title: "Contact",
    description: "contact description"
}

export default function page() {
    return (
        <>
            <HeroWrapper subtitle='get connected' />
            <ContactInfo />
            <Newsletter />
        </>
    )
}
