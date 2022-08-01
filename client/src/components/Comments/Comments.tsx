import { Comment } from '../../types';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import ViewComment from '../Comment/Comment';

type CommentsProps = {
  comments: Comment[];
};

const Comments = (props: CommentsProps) => {
  return (
    <Card>
      <ListGroup className="list-group-flush">
        {props.comments.map((comment) => (
          <ListGroup.Item key={comment.id}>
            <ViewComment comment={comment} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Comments;
