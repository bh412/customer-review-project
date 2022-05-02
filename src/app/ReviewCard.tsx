import {Grid, Rating} from "@mui/material";
import React from "react";
import { Row } from "./Utils";
import {ReviewCardProps} from "./constants";

export const ReviewCard = ({name, rating, comment}: ReviewCardProps) => {
    // Decided to try out the mui grid component
    return (
        <Row>
            <div className="review-card-item">
                <Grid container spacing={2} justifyContent="flex-start">
                    <Grid item xs={3}>
                        <Rating name="read-only" value={rating} readOnly />
                    </Grid>
                    <Grid item xs={4} justifyContent="flex-start">
                        {name}
                    </Grid>
                    <Grid item xs={5}>
                        {comment}
                    </Grid>
                </Grid>
            </div>
        </Row>
    )
}
