import { PostType } from "../types/Post";
import {
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

// TODO: ActivityCard will be changed to include comments and other types of activity.
const ActivityCard = (props: Props) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "16px",
        backgroundColor: "inherit",
      }}
    >
      <CardActionArea component={Link} to={`/posts/${props.post.postId}`}>
        <CardContent sx={{ padding: 2 }}>
          <Stack direction="column" spacing={2}>
            <div>
              <Typography variant="subtitle2">
                Posted on {props.post.createdAt}
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
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActivityCard;
