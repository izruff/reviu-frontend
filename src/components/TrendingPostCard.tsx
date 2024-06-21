import { UserLink } from "./UserLink";
import { TopicLink } from "./TopicLink";
import { PostType } from "../types/Post";
import { Avatar, Card, CardActionArea, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  post: PostType;
};

const TrendingPostCard = (props: Props) => {
  return (
    <Card
      sx={{
        flexBasis: "400px",
        flexShrink: 0,
      }}
    >
      <CardActionArea component={Link} to={`/posts/${props.post.id}`}>
        <div // could have used MUI grid but there were issues with its negative margin feature
          style={{
            padding: "16px",
            minHeight: "100%",
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "min-content auto min-content min-content",
            gap: "16px",
          }}
        >
          <Typography variant="h3">{props.post.title}</Typography>
          <div
            style={{
              lineHeight: "24px",
              maxHeight: "72px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
              WebkitLineClamp: 3,
            }}
          >
            <Typography variant="body1">{props.post.content}</Typography>
          </div>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle2">Some stats</Typography>
            <Typography variant="subtitle2">(votes)</Typography>
            <Typography variant="subtitle2">(comment count)</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar />
            <Stack>
              <TopicLink topic={props.post.topicId} />
              <Typography variant="subtitle2">
                Posted by <UserLink user={props.post.authorId} />, on{" "}
                {props.post.createdAt.toDateString()}.
                {props.post.updatedAt
                  ? ` Last updated on ${props.post.updatedAt.toDateString()}`
                  : ""}
              </Typography>
            </Stack>
          </Stack>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default TrendingPostCard;
