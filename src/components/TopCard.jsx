import { AiFillStar, AiOutlineClockCircle, AiFillCalendar, AiFillEye } from 'react-icons/ai';
function TopCard({ anime }) {
    return (
        <div className="flex mt-4">
            <div className="h-[85px]">
                <img
                    src={anime?.images?.jpg?.image_url}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1">
                <h5 className="text-white ml-2">{anime?.title_english}</h5>
                <span className="flex items-center ml-2 gap-3">
                    <span className="text-greensSecondary flex items-center">
                        <AiFillStar className="mr-1" />
                        {anime?.score}
                    </span>
                    <span className="text-[#78909c] flex items-center">
                        <AiOutlineClockCircle className="mr-1" />
                        {anime?.episodes}
                    </span>
                    <span className="text-[#78909c] flex items-center">
                        <AiFillCalendar className="mr-1" />{' '}
                        {anime?.year || anime.aired.prop.from.year}
                    </span>
                </span>
                <span className="text-greensSecondary flex items-center ml-2">
                    <AiFillEye className="mr-1" /> {anime?.members}
                </span>
            </div>
        </div>
    );
}

export default TopCard;
