export type UUID = string

export type User = {
  id: UUID
  name: string
}

export type Post = {
  id: UUID
  title: string
  text: string
  author: UUID
  created: Date
  modified: Date
  rating: RatingType
}

export type Comment = {
  id: UUID
  text: string
  author: UUID
  created: Date
  modified: Date
  rating: RatingType
  postId: UUID
}

export type RatingType = {
  like: number
  dislike: number
}
