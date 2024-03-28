import Image from "next/image";
import { GALLERY } from "@/constants";
import Section from "@/components/ui/Section";

export default function Gallery() {
    return (
        <Section>
            <div className="flex flex-col">
                <div className="max-w-[586px] w-full">
                    <h1 className="text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] leading-[1.38] font-bold mb-2.5">Gallery</h1>

                    <p className="text-[#595959] mt-[15px]">Some Basic information about Maldives that can help you a lot when you visit so check out all the information before starting your tour</p>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 cLg:grid-cols-4 gap-[30px] mt-10 cLg:mt-[60px]">
                    {GALLERY.map((img) => (
                        <div key={img} className="rounded-[10px] overflow-hidden">
                            <Image src={img} alt={img} width={270} height={202} className="w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
