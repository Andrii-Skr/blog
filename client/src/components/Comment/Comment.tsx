import { Comment } from '../../types';
import Rating from '../Rating/Rating';
import commentState from '../../store/comment-store';
import './comment.css';

type ViewCommentProps = {
  comment: Comment;
};

const ViewComment = (props: ViewCommentProps) => {
  return (
    <div>
      <blockquote className="blockquote mb-0">
        <p>{props.comment.text}</p>
        <footer className="blockquote-footer">{`${props.comment.created} - ${props.comment.author}`}</footer>
      </blockquote>
      <div className="inCommentRight">
        <Rating
          rating={props.comment.rating}
          clike={() => {
            commentState.countCommentLike(props.comment.id);
          }}
          cdisLike={() => {
            commentState.countCommentDislike(props.comment.id);
          }}
        />
      </div>
    </div>
  );
};

export default ViewComment;
