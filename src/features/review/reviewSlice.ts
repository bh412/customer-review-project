import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewCardProps } from '../../app/constants';
import { RootState } from '../../app/store';

const initialState: ReviewCardProps[] = [
  {
    name: "Ben",
    rating: 3,
    comment: "It's alright",
    email: "ben@gmail.com"
  },
  {
    name: "Bob",
    rating: 4,
    comment: "It's a decent product",
    email: "bob@gmail.com"
  },
  {
    name: "Nia",
    rating: 5,
    comment: "It's what I need",
    email: "nia@gmail.com"
  },
  {
    name: "Angry customer",
    rating: 1,
    comment: "It's rubbish",
    email: "angry@gmail.com"
  },
]

// Create a slice to store the review state
export const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    alterReviews: (state, action: PayloadAction<ReviewCardProps>) => {
      // @ts-ignore
      state.push(action.payload);
    },
  },
});

export const { alterReviews } = reviewSlice.actions;

// The selector is used to retrieve the currently stored reviews state
export const selectReviews = (state: RootState) => state.reviews;


export default reviewSlice.reducer;
