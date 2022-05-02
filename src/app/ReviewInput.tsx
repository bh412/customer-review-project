import {Row} from "./Utils";
import {Button, Rating, TextField} from "@mui/material";
import React from "react";
import {ReviewCardProps} from "./constants";
import {alterReviews} from "../features/review/reviewSlice";
import {useAppDispatch} from "./hooks";

interface ReviewInputProps {
    review: ReviewCardProps;
    setReview: (rp: ReviewCardProps) => void;
}

export const ReviewInput = ({review, setReview}: ReviewInputProps) => {
    const dispatch = useAppDispatch();
    function submitReview() {
        dispatch(alterReviews(
            review
        ))
        setReview({name: "", email: "", rating: -1, comment: ""});
    }

    const canSubmit = review.name.length > 0 &&
        review?.email &&
        review?.email?.length > 0 &&
        review.comment.length > 0 &&
        review?.rating &&
        review?.rating > 0;

    return (
        <div className="review-card">
            <Row>
                <TextField id="outlined-name" size="medium" label="Name" variant="outlined" margin="dense" value={review.name} onChange={(event) => setReview({...review, name: event.target.value})}/>
            </Row>
            <Row>
                <TextField id="outlined-email" size="medium" label="Email" variant="outlined" margin="dense" value={review.email} onChange={(event) => setReview({...review, email: event.target.value})}/>
            </Row>
            <Row>
                <Rating name="controlled-rating" value={review.rating} onChange={(event, newValue) => {
                    setReview({...review, rating: newValue});
                }}/>
            </Row>
            <Row>
                <TextField id="outlined-comment" size="medium" label="Comment" variant="outlined" multiline minRows={3} value={review.comment} margin="dense"  onChange={(event) => setReview({...review, comment: event.target.value})}/>
            </Row>
            <Row>
                <Button disabled={!canSubmit} variant="contained" onClick={() => submitReview()}>Submit</Button>
            </Row>
        </div>
    )
}
