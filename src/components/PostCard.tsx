import { UserLink } from "./UserLink";
import { TopicLink } from "./TopicLink";
import { PostType } from "../types/Post";
import { Avatar, Card, Stack, Typography } from "@mui/material";

type Props = {
  post: PostType;
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
      }}
    >
      <Stack direction="column" spacing={2}>
        <div>
          <Typography variant="subtitle2">
            On the topic of <TopicLink topicId={props.post.topicId} />
          </Typography>
          <Typography variant="h4">{props.post.title}</Typography>
        </div>
        <div
          style={{
            lineHeight: "24px",
            maxHeight: "96px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
            WebkitLineClamp: 4,
          }}
        >
          <Typography variant="body1">{props.post.content}</Typography>
        </div>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h6">
            There should be some buttons here.
          </Typography>
          <Avatar sx={{ width: 24, height: 24 }} />
          <Typography variant="subtitle2" zIndex={1}>
            Posted by <UserLink userId={props.post.authorId} />, on{" "}
            {props.post.createdAt}.
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default PostCard;
