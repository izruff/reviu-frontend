import { Avatar, Card, Stack, Typography } from "@mui/material";

type Props = {
  title: string; // just a placeholder
};

const TrendingPostCard = (props: Props) => {
  return (
    <Card
      sx={{
        flexBasis: "400px",
        flexShrink: 0,
      }}>
      <div // could have used MUI grid but there were issues with its negative margin feature
        style={{
          padding: "16px",
          minHeight: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "min-content auto min-content min-content",
          gap: "16px",
        }}>
        <Typography variant="h3">{props.title}</Typography>
        <Typography variant="body1">
          This is the post content, long text will be shown here but truncated.
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="subtitle2">Some stats</Typography>
          <Typography variant="subtitle2">(votes)</Typography>
          <Typography variant="subtitle2">(comment count)</Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar />
          <div>
            <Typography variant="subtitle2">lorem-ipsum</Typography>
            <Typography variant="subtitle2">
              Posted by Aiken, 24 minutes ago.
            </Typography>
          </div>
        </Stack>
      </div>
    </Card>
  );
};

export default TrendingPostCard;
