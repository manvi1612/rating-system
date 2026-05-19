import { useState } from "react";
import Star from "./Star";

function StarRating() {
  const [starRating, setStarRating] = useState(0);

  const feedback = ["Bad", "Ok", "Good", "Very Good", "Excellent"];
 
  return (
   <div className="star-container">
    {[1, 2, 3, 4, 5].map((star) => (
    <Star
      key={star}
      selected={star <= starRating}
      onSelect={() => setStarRating(star)} />
    ))}
    <h2>{feedback[starRating]}</h2>
   </div>
  );
}
export default StarRating;
