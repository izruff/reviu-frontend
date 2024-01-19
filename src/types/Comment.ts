export type CommentType = {
  commentId: number;
  content: string;
  author: string;
  authorId: number;
  createdAt: number;
};

export type CommentTreeType = {
  parent: CommentType;
  children: CommentTreeType[];
};
