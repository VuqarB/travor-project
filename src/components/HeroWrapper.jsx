'use client'

import Image from 'next/image'
import Section from './ui/Section'
import { usePathname } from "next/navigation"

export default function HeroWrapper({ title, subtitle }) {

    const pathname = usePathname()
    const name = pathname.slice(1)

    return (
        <Section className='hero-bg relative' padding='pt-[140px] pb-[80px] xl:pt-[180px] xl:pb-[100px] cLg:pt-[200px] 2xl:pt-[240px] 2xl:pb-[185px]'>
            <div className="max-container flexCenter">
                <div className='w-full flexCenter flex-col'>
                    <div className='text-[#08ac9e] capitalize'>{title ? title : name}</div>
                    <h1 className="my-[25px] text-[#1f3347] text-[42px] xs:text-[48px] md:text-[52px] cLg:text-[60px] leading-[1.2] font-bold capitalize">
                        {subtitle}
                    </h1>
                    <p className="max-w-[565px] text-[#494949] text-center">
                        Travor is one of the most popular Travel agency for those who want to explore the world and try to make adventure
                    </p>
                </div>
            </div>

            <div className="hidden cLg:block absolute top-[200px] left-[120px]">
                <Image src='/hero-element-1.svg' alt="hero-element" width={66} height={97} />
            </div>

            <div className="hidden xl:block absolute right-0 bottom-0">
                <Image src='/hero-element-2-reverse.svg' alt='hero-element' width={478} height={403} />
            </div>
        </Section>
    )
}
