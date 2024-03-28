import Image from "next/image";
import Link from "next/link";

export default function Destination({ data }) {

    return (
        <div className='pt-[15px] px-[15px] pb-[30px] rounded-[10px] bg-[#faf8fd] transition-all duration-300 ease-linear destination-item-hover'>
            <Link href={data.href} className='block rounded-[8px] overflow-hidden'>
                <Image src={data.img} alt='image' width={240} height={210} className='object-cover w-full h-[210px]' />
            </Link>

            <div className='flex flex-col mt-2.5'>
                <div className='flexBetween'>
                    <Link href={data.href} className='text-[#1f3347] text-[24px] font-bold transition-all duration-300 ease-linear destination-title-hover'>{data.title}</Link>
                    <div className='flexCenter gap-[5px]'>
                        <Image src="/rating.svg" alt='rating' width={12} height={12} />
                        <p className='regular-14 text-[#1f3347]'>{data.points}</p>
                    </div>
                </div>
                <div className='flex items-center gap-[5px] mt-[-5px]'>
                    <Image src="/location-gray.svg" alt='location' width={14} height={14} />
                    <p className='regular-14 text-[#595959]'>{data.location}</p>
                </div>
                <div className='flexBetween mt-5'>
                    <div className='regular-14 text-[#595959]'>
                        <span className='text-[18px] text-[#1f3347] font-bold'>${data.cost}/</span>person
                    </div>

                    <Link href="/" className='regular-14 text-[#595959] rounded-[300px] border border-[#ff621f] flexCenter py-[2.5px] px-[15px] transition-all duration-300 ease-linear destination-btn-hover'>Book</Link>
                </div>
            </div>
        </div>
    )
}
