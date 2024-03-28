
export default function OfferCardSkeleton() {

    return (
        <div className='animate-pulse pt-[15px] px-[15px] pb-[30px] rounded-[10px] bg-[#faf8fd]'>
            <div className='rounded-[8px] w-full h-[210px] max-w-[240px] bg-gray-300'></div>

            <div className='h-[108px] flex flex-col mt-2.5'>
                <div className='bg-gray-300 h-3 w-1/3 rounded-full mb-[15px]'></div>
                <div className='bg-gray-300 h-5 w-[full] rounded-full'></div>
                <div className='bg-gray-300 h-3 rounded-full w-2/5 mt-2'></div>
                <div className='flexBetween mt-auto'>
                    <div className='bg-gray-300 h-4 rounded-full w-3/5'></div>
                    <div className='bg-gray-300 h-4 w-1/5 rounded-full'></div>
                </div>
            </div>
        </div>
    )
}
