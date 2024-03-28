import Section from "@/components/ui/Section";
import Package from "./Package";
import { DISCOUNT_PACKAGES } from "@/constants";

export default function DiscountPackages() {
    return (
        <Section padding='py-[60px] md:py-[80px] cLg:py-[100px] 2xl:py-[120px]'>
            <div className="max-container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 cLg:grid-cols-4 gap-x-[30px] gap-y-[40px]">
                {DISCOUNT_PACKAGES.map((data) => (
                    <Package key={data.id} data={data} />
                ))}
            </div>
        </Section>
    )
}
