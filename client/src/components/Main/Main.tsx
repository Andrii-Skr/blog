//import { observer } from 'mobx-react';
import PostState from '../../store/posts-store';
import { Container, Row } from 'react-bootstrap';
import ViewPost from '../Post/Post';

const Main = () => {
  return (
    <Container>
      <Row className="header"></Row>
      <Row className="content">
        {PostState.posts.map((post) => (
          <ViewPost post={post} isPreview={false} key={post.id} />
        ))}
      </Row>
      <Row className="footer"></Row>
    </Container>
  );
};

export default Main;
