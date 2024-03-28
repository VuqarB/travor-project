import Image from 'next/image'

export default function Subtitle({ content, img, size, noMargin, className }) {

    return (
        <div className={`w-full flex items-center gap-2.5 ${!noMargin && 'mb-[17px]'} ${className}`}>
            <div className='text-[#08ac9e] tracking-[.02px]'>{content}</div>
            {img && <Image src={img} alt={content} width={size.width} height={size.height} />}
        </div>
    )
}
