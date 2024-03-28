import Image from "next/image"
import { FUNFACT } from "@/constants"
import Section from "./Section"

export default function Funfact() {
    return (
        <Section>
            <div className="max-container flexCenter xs:flexBetween gap-4 flex-wrap">
                {FUNFACT.map((data) => (
                    <div key={data.img} className="flex items-center gap-[25px]">
                        <Image src={data.img} alt="img" width={80} height={80} />
                        <div className="flex flex-col">
                            <div className="mb-2 text-[#1f3347] text-[36px] leading-[1] font-bold">{data.counter}+</div>
                            <p className="text-[#595959] leading-[1] tracking-[.2px]">{data.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
