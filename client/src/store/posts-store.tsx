import { faker } from '@faker-js/faker';
import { makeAutoObservable } from 'mobx';
import { Post } from '../types';

const tempGetPosts = () => {
  const tempPosts: Post[] = [];
  for (let i = 0; i < 10; i++) {
    tempPosts.push({
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(3),
      text: faker.lorem.text(),
      author: faker.name.firstName(),
      created: faker.date.past(),
      modified: faker.date.past(),
      rating: { like: faker.datatype.number({ min: 0, max: 100 }), dislike: faker.datatype.number({ min: 0, max: 100 }) },
    });
  }
  return tempPosts;
};

class PostState {
  posts: Post[] = [...tempGetPosts()];
  constructor() {
    makeAutoObservable(this);
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  countPostLike(id: string) {
    this.posts = this.posts.map((p) => {
      if (p.id === id) p.rating.like++;
      return p;
    });
  }
  countPostDislike(id: string) {
    this.posts = this.posts.map((p) => {
      if (p.id === id) p.rating.dislike++;
      return p;
    });
  }
}

export default new PostState();
