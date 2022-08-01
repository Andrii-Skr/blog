import { Post } from '../../types';
import ViewComments from '../Comments/Comments';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '../Rating/Rating';
import CommentState from '../../store/comment-store';
import postState from '../../store/posts-store';
//import { observer } from 'mobx-react';

type ViewPostProps = {
  post: Post;
  isPreview?: boolean;
};

const ViewPost = (props: ViewPostProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>{props.isPreview ? props.post.text.substring(100) : props.post.text}</Card.Text>
        <Button variant="light">{'->Read<-'}</Button>
        <div>
          <Rating
            rating={props.post.rating}
            clike={() => {
              postState.countPostLike(props.post.id);
            }}
            cdisLike={() => {
              postState.countPostDislike(props.post.id);
            }}
          />
        </div>
        <ViewComments comments={CommentState.comments} />
      </Card.Body>
    </Card>
  );
};

export default ViewPost;
