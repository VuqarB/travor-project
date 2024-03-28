import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function SliderNextBtn({ positions, onClick }) {
    return (
        <button onClick={onClick} className={`absolute ${positions} flexCenter rounded-full text-white bg-[#08ac9e] hover:bg-[#ff621f] w-[24px] h-[24px] transition-all duration-300 ease-linear`}>
            <KeyboardArrowRightIcon fontSize="small" />
        </button>
    )
}
