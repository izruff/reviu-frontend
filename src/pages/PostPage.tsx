import PostBody from "../components/PostBody";
import { CommentTreeType } from "../types/Comment";
import CommentTree from "../components/CommentTree";
import { PostType } from "../types/Post";
import { Typography } from "@mui/material";

const PostPage = () => {
  const post: PostType = {
    postId: 1,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Aiken",
    authorId: 1,
    topic: "lorem-ipsum",
    topicId: 1,
    createdAt: 0,
  };

  const comment1 = {
    commentId: 1,
    content: "This is the first comment of this post.",
    author: "Aiken",
    authorId: 1,
    createdAt: 0,
  };
  const comment2 = {
    commentId: 2,
    content: "This is the second comment of this post.",
    author: "Dueet",
    authorId: 2,
    createdAt: 0,
  };
  const reply1 = {
    commentId: 3,
    content: "This is me replying to the post above.",
    author: "Dueet",
    authorId: 2,
    createdAt: 0,
  };
  const reply2 = {
    commentId: 4,
    content: "This is another reply by me.",
    author: "Dueet",
    authorId: 2,
    createdAt: 0,
  };
  const reply3 = {
    commentId: 5,
    content: "Another reply!",
    author: "Aiken",
    authorId: 1,
    createdAt: 0,
  };
  const subreply1 = {
    commentId: 6,
    content: "Wow, so many replies!",
    author: "Aiken",
    authorId: 1,
    createdAt: 0,
  };
  const subreply2 = {
    commentId: 7,
    content: "This is a reply to your reply.",
    author: "Dueet",
    authorId: 2,
    createdAt: 0,
  };

  const comments: CommentTreeType[] = [
    {
      parent: comment1,
      children: [
        {
          parent: reply1,
          children: [],
        },
        {
          parent: reply2,
          children: [
            {
              parent: subreply1,
              children: [],
            },
          ],
        },
      ],
    },
    {
      parent: comment2,
      children: [
        {
          parent: reply3,
          children: [
            {
              parent: subreply2,
              children: [],
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <PostBody post={post} />
      <Typography variant="h4" marginTop={8} marginBottom={4}>
        COMMENTS
      </Typography>
      {comments.map((commentTree) => (
        <CommentTree commentTree={commentTree} rootLevel={0} />
      ))}
      <Typography>Load more comments...</Typography>
    </>
  );
};

export default PostPage;
