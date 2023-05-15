import React from "react";
import Comments from "./Comments";
import { useTranslation } from "react-i18next";
import NoReviews from "./NoReviews";

const Reviews = ({ reviews }) => {
  let { t } = useTranslation(["product"]);
  console.log(reviews);
  return (
    <div>
      <div className="md:my-5 my-4">
        <div className="w-full">
          {reviews && reviews[0] ? (
            <div className="reviews">
              {reviews &&
                reviews?.map((review, index) => (
                  <Comments key={index} review={review} />
                ))}
            </div>
          ) : (
            <NoReviews />
          )}
        </div>
        {/* <ReviewsBox /> */}
      </div>
    </div>
  );
};

export default Reviews;
