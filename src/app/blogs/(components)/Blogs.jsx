import Blog from "@/components/ui/Blog"
import Section from "@/components/ui/Section";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BLOGS_DATA } from "@/constants";
import BlogCardSkeleton from "@/components/ui/BlogCardSkeleton";
import { Suspense } from "react";

export default function Blogs() {
    return (
        <Section padding='py-[60px] md:py-[80px] cLg:py-[100px] 2xl:py-[120px]'>
            <div className="max-container grid grid-cols-1 xs:grid-cols-2 cLg:grid-cols-3 gap-x-[30px] gap-y-[40px]">
                {BLOGS_DATA.map((data) => (
                    <Suspense key={data.title} fallback={<BlogCardSkeleton />}>
                        <Blog data={data} />
                    </Suspense>
                ))}
            </div>
            <div className="flexCenter mt-10">
                <button className="block py-[6px] px-5 mx-[10px] rounded-[5px] regular-14 text-[#1f3347] hover:text-white cursor-point bg-[#fafafa] hover:bg-[#08ac9e] border border-[#ccc] hover:border-[#08ac9e] outline-none transition-all duration-300 ease-linear">
                    <span>More</span>
                    <ExpandMoreIcon fontSize="small" className="ml-1" />
                </button>
            </div>
        </Section>
    )
}
