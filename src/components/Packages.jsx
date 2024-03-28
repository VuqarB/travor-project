'use client'

import Package from "./ui/Package";
import { PACKAGES_DATA } from "@/constants";
import Section from "./ui/Section";
import Subtitle from "./ui/Subtitle";
import useEmblaCarousel from "embla-carousel-react";
import { Suspense, useCallback } from "react";
import SliderPrevBtn from "./ui/SliderPrevBtn";
import SliderNextBtn from "./ui/SliderNextBtn";
import PackageCardSkeleton from "./ui/PackageCardSkeleton";

export default function Packages() {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <Section>
            <div className="max-container flex flex-col">
                <div className='flexCenter flex-col max-w-[455px] w-full mx-auto'>
                    <Subtitle
                        content='Tour Packages'
                        img='/camera-icon.png'
                        size={{ width: 26, height: 26 }}
                        className='flexCenter'
                    />
                    <h1 className='text-[32px] cLg:text-[36px] text-[#1f3347] mb-2.5 font-bold leading-[1.38]'>
                        Most <span className='text-[#ff621f] underline'>Attractive</span> Packages
                    </h1>
                    <p className="mt-[15px] text-[#595959] text-center">Travor is one of the most popular Travel agency for who want to explore the wold with adventure</p>
                </div>

                <div className="mt-10 h-auto w-full">
                    <div className="pt-5 px-[15px] relaive inset-x-0">
                        <div className="embla-packages">
                            <div className="embla-packages__viewport pb-5 mb-[55px]" ref={emblaRef}>
                                <div className="embla-packages__container">
                                    {PACKAGES_DATA.map((data) => (
                                        <Suspense key={data.title} fallback={<PackageCardSkeleton />}>
                                            <Package data={data} />
                                        </Suspense>
                                    ))}
                                </div>
                            </div>
                            <SliderPrevBtn onClick={scrollPrev} positions='left-1/2 right-auto' />
                            <SliderNextBtn onClick={scrollNext} positions='left-1/2 right-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
