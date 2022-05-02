import {ReviewCard} from "./ReviewCard";
import React from "react";
import {ReviewCardProps} from "./constants";
import {Col} from "./Utils";

interface ReviewStackProps {
    reducerReviews: ReviewCardProps[];
}

export const ReviewStack = ({reducerReviews}: ReviewStackProps) => {
    let key = 0;

    return (
        <Col>
            {reducerReviews.length && reducerReviews.map((review: any) => <ReviewCard key={key++} name={review.name} rating={review.rating} comment={review.comment}/>)}
        </Col>
    )
};
