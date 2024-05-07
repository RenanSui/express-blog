import { Post } from '.'

export type CreatePostProps = Pick<Post, 'title' | 'body' | 'userId'>

export type CreatePostPayload = Pick<Post, 'title' | 'body'>
