
export default function TestimonalsComments({ testimonal }) {

    return (
        <div className="embla__slide pt-10 testimonals-quote">
            <p className="mb-[25px] text-[#595959] font-medium">{testimonal.comment}</p>
            <div className="mb-[5px] text-[#08ac9e] leading-[1] font-bold">{testimonal.author}</div>
            <div className="text-[#595959] regular-14 tracking-[.04px]">{testimonal.profession}</div>
        </div>
    )
}

