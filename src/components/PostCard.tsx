import { UserLink } from "./UserLink";
import { TopicLink } from "./TopicLink";
import { PostType } from "../types/Post";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  post: PostType;
};

const PostCard = (props: Props) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "16px",
        backgroundColor: "inherit",
      }}
    >
      <CardActionArea component={Link} to={`/posts/${props.post.id}`}>
        <CardContent sx={{ padding: 2 }}>
          <Stack direction="column" spacing={2}>
            <div>
              <Typography variant="subtitle2">
                On the topic of <TopicLink topic={props.post.topicId} />
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
              <Typography variant="subtitle2">
                Posted by <UserLink user={props.post.authorId} />, on{" "}
                {props.post.createdAt.toDateString()}.
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;
