import { Star, StarHalf } from "lucide-react";

const StarRating = ({
  rating = 0,
  totalStars = 5,
  starSize = 24,
  starColor = "#ffc107",
}) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= Math.floor(rating)) {
        // Full star
        stars.push(
          <Star key={i} size={starSize} color={starColor} fill={starColor} />
        );
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        // Half star
        stars.push(
          <StarHalf
            key={i}
            size={starSize}
            color={starColor}
            fill={starColor}
          />
        );
      } else {
        // Empty star
        stars.push(
          <Star key={i} size={starSize} color={starColor} fill="none" />
        );
      }
    }

    return stars;
  };

  return <div className="flex items-center">{renderStars()}</div>;
};

export default StarRating;
