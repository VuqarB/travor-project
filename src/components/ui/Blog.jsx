import Image from "next/image";
import Link from "next/link";

export default function Blog({ data }) {
    return (
        <>
            <div className="pt-5 px-5 pb-[35px] rounded-[10px] bg-[#faf8fd] transition-all duration-300 ease-linear package-item-hover">
                <Link href="/" className="w-full block max-h-[262px] overflow-hidden rounded-[8px]">
                    <Image src={data.img} alt={data.img} width={330} height={262} className="w-full object-cover" />
                </Link>

                <div className="w-full mt-[17px]">
                    <Link href="/" className="text-[24px] text-[#1f3347] font-bold transition-all duration-300 ease-linear package-title-hover">
                        {data.title}
                    </Link>
                    <p className="mt-2.5 mb-5 text-[#595959] regular-16 tracking-[.4px]">{data.desc}</p>
                    <div className="w-full h-[1px] mt-5 mb-[15px] bg-[#bdbdbd]" />
                    <div className="flexBetween w-full">
                        <p className="regular-14 text-[#696969] tracking-[.2px]">{data.date}</p>
                        <Link href="/" className="text-[#1f3347] hover:text-[#ff621f] text-[14px] font-bold transition-all duration-300 ease-linear">Read More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
