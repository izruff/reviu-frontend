export type CommentType = {
  commentId: number;
  content: string;
  authorId: number;
  createdAt: number;
  updatedAt?: number;
  deletedAt?: number;
  reasonForDeletion?: string;
  moderatorId?: number;
};

export type CommentTreeType = {
  parent: CommentType;
  children: CommentTreeType[];
};
