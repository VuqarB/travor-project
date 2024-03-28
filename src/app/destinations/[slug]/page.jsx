import HeroWrapper from "@/components/HeroWrapper";
import Explore from "../(components)/Explore";
import About from "../(components)/About";
import BasicInfo from "../(components)/BasicInfo";
import Newsletter from "@/components/Newsletter";
import Gallery from "../(components)/Gallery";
import Packages from "@/components/Packages";

export default function page() {
    return (
        <>
            <HeroWrapper title='Destinations' subtitle='Maldives' />
            <Explore />
            <About />
            <BasicInfo />
            <Gallery />
            <Packages />
            <Newsletter />
        </>
    )
}
