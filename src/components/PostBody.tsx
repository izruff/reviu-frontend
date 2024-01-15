import { UserTag } from "./UserTag";
import { Typography } from "@mui/material";

export const PostBody = () => {
  return (
    <>
      <UserTag />
      <Typography>Post Title</Typography>
      <Typography>This is the post content, the whole text will be shown here with complete formatting.</Typography>
      <Typography>Here should be some statistics (votes, comment count, etc).</Typography>
      <Typography>There should be some buttons here.</Typography>
    </>
  );
}