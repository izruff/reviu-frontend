export type PostType = {
  postId: number;
  title: string;
  content: string;
  authorId: number;
  topicId: number;
  createdAt: number;
  updatedAt?: number;
  deletedAt?: number;
  reasonForDeletion?: string;
  moderatorId?: number;
};
