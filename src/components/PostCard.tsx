import { UserTag } from "./UserTag";
import { Card, Typography } from "@mui/material"

type Props = {
  title: string,
  topic: string,
}

export const PostCard = (props: Props) => {
  return (
    <Card>
      <Typography>On the topic of {props.topic}</Typography>
      <Typography>{props.title}</Typography>
      <Typography>This is the post content, long text will be shown here but truncated.</Typography>
      <Typography>Here should be some statistics (votes, comment count, etc).</Typography>
      <Typography>There should be some buttons here.</Typography>
      <UserTag />
    </Card>
  );
};