import { Star, StarHalf } from "lucide-react";

const StarRating = ({ rating = 4.5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={18} className="fill-orange-400 text-orange-400" />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <StarHalf size={18} className="fill-orange-400 text-orange-400" />
      )}

      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={18} className="text-gray-300" />
      ))}

    </div>
  );
};

export default StarRating;