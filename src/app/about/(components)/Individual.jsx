import Image from 'next/image'

export default function Individual({ data }) {
    return (
        <div className='pt-[15px] px-[15px] pb-[30px] rounded-[10px] bg-[#faf8fd] transition-all duration-300 ease-linear destination-item-hover'>
            <div className='rounded-[8px] overflow-hidden'>
                <Image src={data.img} alt='image' width={240} height={210} className='object-cover w-full' />
            </div>

            <div className='flexCenter flex-col mt-[25px]'>
                <div className='text-[#1f3347] text-[20px] 2xl:text-[24px] leading-[1] font-bold transition-all duration-300 ease-linear .destination-item-hover'>{data.name}</div>
                <p className='mt-2.5 regular-16 leading-[1] text-[#595959]'>{data.profession}</p>
            </div>
        </div>
    )
}
