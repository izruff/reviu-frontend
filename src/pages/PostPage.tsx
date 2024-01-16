import { CommentBody } from "../components/CommentBody";
import { PostBody } from "../components/PostBody";
import { Box, Typography } from "@mui/material";

const PostPage = () => {
  const commentList = ["some comments", "posted by", "other users", "to respond", "to this post"];
  
  return (
    <>
      <Box marginTop={8}>
        <PostBody />
      </Box>
      <Typography variant="h4" marginTop={8} marginBottom={4}>COMMENTS</Typography>
      {commentList.map((comment) => (
        <CommentBody comment={comment} />
      ))}
      <Typography>Load more comments...</Typography>
    </>
  );
};

export default PostPage;
