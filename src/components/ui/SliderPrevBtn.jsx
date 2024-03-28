import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function SliderPrevBtn({ positions, onClick }) {
    return (
        <button onClick={onClick} className={`absolute ${positions} flexCenter rounded-full text-white bg-[#08ac9e] hover:bg-[#ff621f] w-[24px] h-[24px] transition-all duration-300 ease-linear ml-[-32.5px]`}>
            <KeyboardArrowLeftIcon fontSize="small" />
        </button>
    )
}
