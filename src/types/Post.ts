export type PostType = {
  postId: number;
  title: string;
  content: string;
  author: string;
  authorId: number;
  topic: string;
  topicId: number;
  createdAt: number;
  updatedAt?: number;
  deleteInfo?: {
    deletedAt: number;
    reason: string;
    moderator: string;
    moderatorId: number;
  };
};
