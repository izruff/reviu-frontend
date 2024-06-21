export type PostType = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  topicId: number;
  createdAt: Date;
  updatedAt?: Date;
  viewCount: number;
  deletedAt?: Date;
  reasonForDeletion?: string;
  moderatorId?: number;
};
