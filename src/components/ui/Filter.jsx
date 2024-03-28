import Button from "./Button"

const TYPES = [
    {
        value: 'Adventure',
        label: 'Adventure'
    },
    {
        value: 'Beaches',
        label: 'Beaches'
    },
    {
        value: 'City Tour',
        label: 'City Tour'
    },
    {
        value: 'Hiking',
        label: 'Hiking'
    },
    {
        value: 'Honeymoon',
        label: 'Honeymoon'
    },
    {
        value: 'Museum Tour',
        label: 'Museum Tour'
    },
]

const GUESTS = [
    {
        value: '01 Person',
        label: '01 Person'
    },
    {
        value: '02 Person',
        label: '02 Person'
    },
    {
        value: '03 Person',
        label: '03 Person'
    },
    {
        value: '04 Person',
        label: '04 Person'
    },
    {
        value: '05 Person',
        label: '05 Person'
    },
]

export default function Filter() {
    return (
        <div className="max-container">
            <div className="w-full p-10 filter-border rounded-[20px] cLg:rounded-[500px] bg-[#faf8fd]">
                <form>
                    <div className="flexCenter cLg:flexBetween gap-4 flex-wrap cLg:flex-nowrap">
                        <div className="w-full xs:w-[45%] cLg:w-1/5">
                            <div className="text-[#1f3347] font-bold mb-[5px]">Destination</div>
                            <input type="text" placeholder="Search Location" className="w-full h-5 bg-transparent outline-none block text-[14px] leading-[1.43] text-[#333]" />
                        </div>
                        <div className="hidden cLg:block w-[1px] h-[45px] bg-[#08AC7A] xl:mx-[20px]" />

                        <div className="w-full xs:w-[45%] cLg:w-1/5">
                            <div className="text-[#1f3347] font-bold mb-[5px]">Type</div>
                            <select type="text" placeholder="Search Location" className="w-full h-5 bg-transparent outline-none block text-[14px] leading-[1.43] text-[#333]">
                                {TYPES.map((data) => (
                                    <option key={data.value} value={data.value}>
                                        {data.value}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="hidden cLg:block w-[1px] h-[45px] bg-[#08AC7A] xl:mx-[20px]" />

                        <div className="w-full xs:w-[45%] cLg:w-1/5">
                            <div className="text-[#1f3347] font-bold mb-[5px]">Date</div>
                            <input type="text" placeholder="Type Date" className="w-full h-5 bg-transparent outline-none block text-[14px] leading-[1.43] text-[#333]" />
                        </div>
                        <div className="hidden cLg:block w-[1px] h-[45px] bg-[#08AC7A] xl:mx-[20px]" />

                        <div className="w-full xs:w-[45%] cLg:w-1/5">
                            <div className="text-[#1f3347] font-bold mb-[5px]">Guest</div>
                            <select type="text" placeholder="Search Location" className="w-full h-5 bg-transparent outline-none block text-[14px] leading-[1.43] text-[#333]">
                                {GUESTS.map((data) => (
                                    <option key={data.value} value={data.value}>
                                        {data.value}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full xs:w-[45%] cLg:w-1/5 flex items-center justify-center cLg:justify-end">
                            <Button translate>Find Trip</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
