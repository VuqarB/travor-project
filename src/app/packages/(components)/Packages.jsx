import Filter from "@/components/ui/Filter";
import Package from "@/components/ui/Package"
import PackageCardSkeleton from "@/components/ui/PackageCardSkeleton";
import Section from "@/components/ui/Section";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Suspense } from "react";

const PACKAGES_DATA = [
    {
        img: '/package-1.jpg',
        title: 'Italy Tour Package',
        during: '5 Day 4 Night',
        points: '4.8',
        cost: '$110'
    },
    {
        img: '/package-2.jpg',
        title: 'Moldives Tour Package',
        during: '4 Day 3 Night',
        points: '5.0',
        cost: '$320'
    },
    {
        img: '/package-3.jpg',
        title: 'Brazil Tour Package',
        during: '8 Day 7 Night',
        points: '4.8',
        cost: '$320'
    },
    {
        img: '/package-4.jpg',
        title: 'Greece Tour Package',
        during: '5 Day 4 Night',
        points: '4.8',
        cost: '$110'
    },
    {
        img: '/package-5.jpg',
        title: 'Dubai Tour Package',
        during: '5 Day 4 Night',
        points: '5.0',
        cost: '$110'
    },
    {
        img: '/package-6.jpg',
        title: 'France Tour Package',
        during: '5 Day 4 Night',
        points: '4.8',
        cost: '$510'
    },
]


export default function Packages() {
    return (
        <Section padding='py-[60px] md:py-[80px] cLg:py-[100px] 2xl:py-[120px]'>
            <div className="max-container">
                <Filter />
                <div className="grid grid-cols-1 xs:grid-cols-2 cLg:grid-cols-3 gap-x-[30px] gap-y-[40px] mt-20">
                    {PACKAGES_DATA.map((data) => (
                        <Suspense key={data.title} fallback={<PackageCardSkeleton />}>
                            <Package data={data} />
                        </Suspense>
                    ))}
                </div>
                <div className="flexCenter mt-10">
                    <button className="block py-[6px] px-5 mx-[10px] rounded-[5px] regular-14 text-[#1f3347] hover:text-white cursor-point bg-[#fafafa] hover:bg-[#08ac9e] border border-[#ccc] hover:border-[#08ac9e] outline-none transition-all duration-300 ease-linear">
                        <span>More</span>
                        <ExpandMoreIcon fontSize="small" className="ml-1" />
                    </button>
                </div>
            </div>
        </Section>
    )
}
