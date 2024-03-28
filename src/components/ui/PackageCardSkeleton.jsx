
export default function PackageCardSkeleton() {

    return (
        <div className="embla-packages__slide">
            <div className='animate-pulse pt-5 px-5 pb-[35px] rounded-[10px] bg-[#faf8fd]'>
                <div className='rounded-[8px] h-[262px] max-w-[310px] w-full bg-gray-300'></div>

                <div className='flexCenter flex-col w-full mt-[15px]'>
                    <div className='bg-gray-300 h-5 w-4/5 rounded-full'></div>
                    <div className='bg-gray-300 h-4 rounded-full w-2/5 mt-2.5'></div>
                    <div className="w-full h-[1px] mt-5 mb-[15px] bg-[#bdbdbd]" />

                    <div className='flexBetween w-full'>
                        <div className='bg-gray-300 h-2 rounded-full w-1/5'></div>
                        <div className='bg-gray-300 h-3 w-2/5 rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
