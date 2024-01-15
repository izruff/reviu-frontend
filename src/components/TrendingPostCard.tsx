import { UserTag } from "./UserTag";
import { Card, Typography } from "@mui/material";

type Props = {
  title: string // just a placeholder
};

export const TrendingPostCard = (props: Props) => {
  return (
    <Card>
      <Typography>{props.title}</Typography>
      <Typography>This is the post content, long text will be shown here but truncated.</Typography>
      <Typography>Here should be some statistics (votes, comment count, etc).</Typography>
      <UserTag />
    </Card>
  );
};
