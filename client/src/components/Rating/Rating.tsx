import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { RatingType } from '../../types';
import { observer } from 'mobx-react';

type PropRating = { rating: RatingType; clike: () => void; cdisLike: () => void };
const Rating = observer(({ rating: { like, dislike }, clike, cdisLike }: PropRating) => {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button className="like" variant="secondary" onClick={() => clike()}>{`Like ${like}`}</Button>
      <Button className="dislike" variant="secondary" onClick={() => cdisLike()}>{`Dislike ${dislike}`}</Button>
    </ButtonGroup>
  );
});

export default Rating;
