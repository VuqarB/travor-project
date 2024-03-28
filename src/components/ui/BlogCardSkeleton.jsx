
export default function BlogCardSkeleton() {

    return (
        <div className='animate-pulse pt-5 px-5 pb-[35px] rounded-[10px] bg-[#faf8fd]'>
            <div className='rounded-[8px] w-full h-[262px] max-w-[330px] bg-gray-300'></div>

            <div className='mt-[17px]'>
                <div className='bg-gray-300 h-5 w-4/5 rounded-full'></div>
                <div className="mt-2.5 mb-5 flex flex-col gap-[5px]">
                    <div className='bg-gray-300 h-4 w-full rounded-full'></div>
                    <div className='bg-gray-300 h-4 w-full rounded-full'></div>
                </div>
                <div className="w-full h-[1px] mt-5 mb-[15px] bg-[#bdbdbd]" />
                <div className='flexBetween mt-auto'>
                    <div className='bg-gray-300 h-4 w-2/5 rounded-full'></div>
                    <div className='bg-gray-300 h-4 w-1/5 rounded-full'></div>
                </div>
            </div>
        </div>
    )
}
