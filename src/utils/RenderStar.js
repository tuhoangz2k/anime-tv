import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';

function RenderStar({ rating, size }) {
    const arr = [];
    if (!rating) {
        for (let i = 1; i <= 10; i++) {
            arr.push(<BsStar size={size} key={i} />);
        }
        return arr;
    }

    for (let i = 1; i <= 10; i++) {
        if (rating >= i) {
            arr.push(<BsStarFill size={size} key={i} />);
        } else if (Math.round(rating) === i) {
            arr.push(<BsStarHalf size={size} key={i} />);
        } else {
            arr.push(<BsStar size={size} key={i} />);
        }
    }
    return arr;
}
export default RenderStar;
