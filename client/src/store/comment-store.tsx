import { faker } from '@faker-js/faker';
import { makeAutoObservable } from 'mobx';
import { Comment } from '../types';

const tempGetComments = () => {
  const tempComments: Comment[] = [];

  for (let i = 0; i < 20; i++) {
    tempComments.push({
      id: faker.datatype.uuid(),
      postId: faker.datatype.uuid(),
      text: faker.lorem.paragraph(),
      author: faker.name.firstName(),
      created: faker.date.past(),
      modified: faker.date.past(),
      rating: { like: faker.datatype.number({ min: 0, max: 100 }), dislike: faker.datatype.number({ min: 0, max: 100 }) },
    });
  }
  return tempComments;
};

class CommentState {
  comments: Comment[] = [...tempGetComments()];
  constructor() {
    makeAutoObservable(this);
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  countCommentLike(id: string) {
    this.comments = this.comments.map((c) => {
      if (c.id === id) c.rating.like++;
      console.log(c.rating.like);
      return c;
    });
  }
  countCommentDislike(id: string) {
    this.comments = this.comments.map((c) => {
      if (c.id === id) c.rating.dislike++;
      return c;
    });
  }
}

export default new CommentState();
