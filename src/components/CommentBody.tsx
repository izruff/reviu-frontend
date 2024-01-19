import { CommentType } from "../types/Comment";
import { Avatar, Card, Stack, Typography } from "@mui/material";

type Props = {
  comment: CommentType;
  level: number;
};

const CommentBody = (props: Props) => {
  return (
    <Card
      elevation={0}
      sx={{
        padding: 2,
        borderRadius: 0,
        marginLeft: props.level * 2,
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar sx={{ width: 16, height: 16 }} />
        <Typography variant="subtitle2">{props.comment.author}</Typography>
      </Stack>
      <Typography variant="body1">{props.comment.content}</Typography>
    </Card>
  );
};

export default CommentBody;
