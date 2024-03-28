import { Suspense } from 'react'
import Destination from './ui/Destination'
import DestinationCardSkeleton from './ui/DestinationCardSkeleton'
import Section from './ui/Section'
import Subtitle from './ui/Subtitle'
import { DESTINATIONS_DATA } from '@/constants'

export default function Destinations() {

    return (
        <Section>
            <div className='max-container'>
                <div className='flex items-start md:items-center md:justify-between flex-col md:flex-row w-full'>
                    <div className='max-w-[348px] w-full'>
                        <Subtitle content='Most Attractive' img='/location.png' size={{ width: 20, height: 20 }} />
                        <h1 className='text-[32px] cLg:text-[36px] text-[#1f3347] mb-2.5 font-bold leading-[1.38]'>
                            Popular <span className='text-[#ff621f]'>Destination</span> we offer for all
                        </h1>
                    </div>

                    <div className='max-w-[508px] w-full'>
                        <div className='mb-3 text-[#1f3347] font-medium'>
                            <span className='text-[#08ac9e]'>850+</span> Destionations
                        </div>

                        <p className='pl-[15px] border-l border-[#08ac9e] text-[#595959]'>
                            Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 cLg:grid-cols-4 gap-[30px] mt-[45px]'>
                    {DESTINATIONS_DATA.map((data) => (
                        <Suspense key={data.title} fallback={<DestinationCardSkeleton />}>
                            <Destination data={data} />
                        </Suspense>
                    ))}
                </div>
            </div>
        </Section>
    )
}
