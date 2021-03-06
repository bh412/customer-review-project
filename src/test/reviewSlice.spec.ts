import { ReviewCardProps } from '../app/constants';
import reviewReducer, {
   alterReviews
} from '../features/review/reviewSlice';

describe('review reducer', () => {
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
      name: "Noa",
      rating: 5,
      comment: "It's what I need",
      email: "noa@gmail.com"
    },
    {
      name: "Angry customer",
      rating: 1,
      comment: "It's rubbish",
      email: "angry@gmail.com"
    },
  ]

  it('should handle initial state', () => {
    expect(reviewReducer(undefined, { type: 'unknown' })).toEqual([
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
        name: "Noa",
        rating: 5,
        comment: "It's what I need",
        email: "noa@gmail.com"
      },
      {
        name: "Angry customer",
        rating: 1,
        comment: "It's rubbish",
        email: "angry@gmail.com"
      },
    ]);
  });

  it('should handle review addition', () => {
    const actual = reviewReducer(initialState, alterReviews({
      name: "TestUser",
      email: "Test@User.com",
      rating: 5,
      comment: "Test comment"
    }));
    expect(actual).toEqual([
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
        name: "Noa",
        rating: 5,
        comment: "It's what I need",
        email: "noa@gmail.com"
      },
      {
        name: "Angry customer",
        rating: 1,
        comment: "It's rubbish",
        email: "angry@gmail.com"
      },
      {
        name: "TestUser",
        email: "Test@User.com",
        rating: 5,
        comment: "Test comment"
      }
    ]);
  });
});
