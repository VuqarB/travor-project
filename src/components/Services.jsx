import Section from "./ui/Section"
import Service from "./ui/Service"
import { SERVICES_DATA } from "@/constants"

export default function Services({ padding }) {
    return (
        <Section padding={padding} >
            <div className='max-container flexCenter flex-col w-full'>
                <div className="max-w-[645px] mx-auto text-center">
                    <h1 className="text-[28px] xs:text-[32px] cLg:text-[36px] text-[#1f3347] mb-2.5 font-bold leading-[1.38]">
                        We <span className="text-[#ff621f]">always</span> focus on best <span className="text-[#08ac9e]">Benefits</span> as well as <span className="text-[#08ac9e] underline">Professional</span> Service
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 cLg:gap-[60px] xl:gap-32 mt-[60px]">
                    {SERVICES_DATA.map((data) => (
                        <Service key={data.content} data={data} />
                    ))}
                </div>
            </div>
        </Section>
    )
}
