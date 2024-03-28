import Destination from "@/components/ui/Destination"
import DestinationCardSkeleton from "@/components/ui/DestinationCardSkeleton"
import Section from "@/components/ui/Section"
import { DESTINATIOS } from "@/constants"
import { Suspense } from "react"

export default function Destintions() {
    return (
        <Section padding='py-[60px] md:py-[80px] cLg:py-[100px] 2xl:py-[120px]'>
            <div className="max-container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 cLg:grid-cols-4 gap-x-[30px] gap-y-[40px]">
                {DESTINATIOS.map((data) => (
                    <Suspense key={data.title} fallback={<DestinationCardSkeleton />}>
                        <Destination key={data.title} data={data} />
                    </Suspense>
                ))}
            </div>
        </Section>
    )
}
