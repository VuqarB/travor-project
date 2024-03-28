import Image from "next/image";
import Link from "next/link";

export default function Package({ data }) {
    return (
        <>
            <div className="embla-packages__slide">
                <div className="pt-5 px-5 pb-[35px] rounded-[10px] bg-[#faf8fd] text-center transition-all duration-300 ease-linear package-item-hover">

                    <Link href="/" className="w-full block max-h-[262px] overflow-hidden rounded-[8px]">
                        <Image src={data.img} alt={data.img} width={310} height={262} className="w-full object-cover" />
                    </Link>

                    <div className="flexCenter flex-col w-full mt-[15px]">
                        <Link href="/" className="text-[24px] text-[#1f3347] font-bold transition-all duration-300 ease-linear package-title-hover">
                            {data.title}
                        </Link>
                        <p className="mt-2.5 text-[#595959]">{data.during}</p>
                        <div className="w-full h-[1px] mt-5 mb-[15px] bg-[#bdbdbd]" />
                        <div className="flexBetween w-full">
                            <div className="flex items-center gap-[5px]">
                                <Image src='/rating.svg' alt="rating" width={12} height={14} />
                                <div className="regular-14">{data.points}</div>
                            </div>
                            <div className="text-[16px] font-semibold">
                                Start from <span className="text-[#ff621f]">{data.cost}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
