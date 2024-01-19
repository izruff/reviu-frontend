import { PostType } from "../types/Post";
import { Avatar, Paper, Stack, Typography } from "@mui/material";

type Props = {
  post: PostType;
};

const PostBody = (props: Props) => {
  return (
    <Paper sx={{ padding: "32px" }}>
      <Stack direction="column" spacing={4}>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ width: 24, height: 24 }} />
            <Typography variant="subtitle2">
              Posted by {props.post.author} on the topic of {props.post.topic},
              24 minutes ago (TODO).
            </Typography>
          </Stack>
          <Typography variant="h2">{props.post.title}</Typography>
        </Stack>
        <Typography variant="body1">{props.post.content}</Typography>
        <Stack direction="column" spacing={1}>
          <Typography variant="subtitle2">
            Here should be some statistics (votes, comment count, etc).
          </Typography>
          <Typography variant="h6">
            There should be some buttons here.
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PostBody;
