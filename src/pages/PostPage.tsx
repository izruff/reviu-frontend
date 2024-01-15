import { CommentBody } from "../components/CommentBody";
import { PostBody } from "../components/PostBody";
import { Typography } from "@mui/material";

const PostPage = () => {
  const commentList = ["some comments", "posted by", "other users", "to respond", "to this post"];
  
  return (
    <>
      <PostBody />
      <Typography>COMMENTS</Typography>
      {commentList.map((comment) => (
        <CommentBody comment={comment} />
      ))}
      <Typography>Load more comments...</Typography>
    </>
  );
};

export default PostPage;
