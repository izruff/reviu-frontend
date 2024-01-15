import { UserTag } from "./UserTag";
import { Card, Typography } from "@mui/material";

type Props = {
  comment: string,
}

export const CommentBody = (props: Props) => {
  return (
    <Card>
      <UserTag />
      <Typography>{props.comment}</Typography>
    </Card>
  );
}