import Section from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <Section>
            <div className="max-container flex flex-col md:flex-row items-center gap-[25px] xl:gap-10">
                <div className="flex-1">
                    <Image src='/destination-about-image.png' alt="about-img" width={561} height={461} />
                </div>
                <div className="flex-1 cLg:max-w-[529px] w-full">
                    <h1 className="text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] leading-[1.38] font-bold mb-[35px]">
                        Explore the Beauty of Maldives adventure
                    </h1>

                    <div>
                        <p className="text-[#595959] mb-[33px]">Travor is one of the most popular Travel agency for those explore the world and try to make adventure as well as we can beautiful destination around the world and make you trip you explore the beautiful Maldives with great facilities</p>
                        <p className="text-[#595959] mb-[33px]">Travor is one of the most popular Travel agency for those <Link href='/' className="text-[#08ac9e] underline">explore</Link> the world and try to make <Link href='/' className="text-[#08ac9e] underline">adventure</Link> as we provide beautiful destination around the world and make you trip</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}
