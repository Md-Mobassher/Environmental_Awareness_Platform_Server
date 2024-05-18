import { IPost } from './post.interface'
import { Post } from './post.model'
import QueryBuilder from '../../builder/QueryBuilder'

export const createPost = async (data: IPost): Promise<IPost> => {
  const post = new Post(data)
  return await post.save()
}

export const getPosts = async (query: Record<string, unknown>) => {
  const postQuery = new QueryBuilder(
    Post.find().populate('userId').populate('likes'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields()
  const result = await postQuery.modelQuery
  const meta = await postQuery.countTotal()
  return {
    meta,
    result,
  }
}

export const likePost = async (
  postId: string,
  userId: string,
): Promise<IPost | null> => {
  return await Post.findByIdAndUpdate(
    postId,
    { $addToSet: { likes: userId } },
    { new: true },
  )
}

export const PostServices = {
  createPost,
  getPosts,
  likePost,
}
