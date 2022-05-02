import React, {useEffect, useState} from 'react';
import './scss/App.scss';
import {useAppSelector} from "./app/hooks";
import {selectReviews} from "./features/review/reviewSlice";
import {ReviewChart} from "./app/ReviewChart";
import { Col, Row } from './app/Utils';
import {ReviewCardProps} from "./app/constants";
import {ReviewInput} from "./app/ReviewInput";
import {ReviewStack} from "./app/ReviewStack";

function App() {
    const [review, setReview] = useState<ReviewCardProps>({name: "", email: "", rating: -1, comment: ""});
    const [ratings, setRatings] = useState<number[]>([]);
    const [avgRating, setAvgRating] = useState<number | null>(-1);
    const reducerReviews = useAppSelector(selectReviews);

    useEffect(() => {
        const tempArray = [0,0,0,0,0];
        let tempAvg = 0;
        // @ts-ignore
        reducerReviews.forEach((review: ReviewCardProps) => tempArray[review.rating - 1] += 1);
        tempArray.forEach((index, item) => tempAvg += (index + 1) * item);
        setRatings(tempArray);
        setAvgRating(Math.round((tempAvg / 5) * 10) / 10);
    }, [reducerReviews]);

    return (
        <div className="App">
            <div className="content-card">
                <Row>
                    <Col>
                        <ReviewInput review={review} setReview={setReview}/>
                    </Col>
                    <Col>
                        <ReviewChart ratings={ratings} avgRating={avgRating}/>
                    </Col>
                </Row>
                <Row>
                    <ReviewStack reducerReviews={reducerReviews}/>
                </Row>
                <div className="bottom-margin"/>
            </div>
        </div>
  );
}

export default App;
