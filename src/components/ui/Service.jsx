import Image from 'next/image'

export default function Service({ data }) {
    return (
        <div className="flexCenter flex-col">
            <Image src={data.icon} alt="icon" width={109} height={105} />
            <div className="text-center">
                <p className="mt-[35px] mb-5 text-[24px] font-bold">{data.title}</p>
                <p className="text-[#595959]">{data.content}</p>
            </div>
        </div>
    )
}
    