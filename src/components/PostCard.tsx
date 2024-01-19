import { Avatar, Card, Stack, Typography } from "@mui/material";

type Props = {
  title: string;
  topic: string;
};

const PostCard = (props: Props) => {
  return (
    <Card
      elevation={0}
      sx={{
        padding: "16px",
        borderRadius: "16px",
        backgroundColor: "inherit",
        ":hover": {
          backgroundColor: "#eaeaea",
        },
      }}>
      <Typography variant="subtitle2">On the topic of {props.topic}</Typography>
      <Typography variant="h4">{props.title}</Typography>
      <Typography variant="body1">
        This is the post content, long text will be shown here but truncated.
      </Typography>
      <Typography variant="subtitle2">
        Here should be some statistics (votes, comment count, etc).
      </Typography>
      <Typography variant="h6">There should be some buttons here.</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ width: 24, height: 24 }} />
        <Typography variant="subtitle2">
          Posted by Aiken, 24 minutes ago.
        </Typography>
      </Stack>
    </Card>
  );
};

export default PostCard;
