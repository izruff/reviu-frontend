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
      }}
    >
      <Stack direction="column" spacing={2}>
        <div>
          <Typography variant="subtitle2">
            On the topic of {props.topic}
          </Typography>
          <Typography variant="h4">{props.title}</Typography>
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
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        </div>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h6">
            There should be some buttons here.
          </Typography>
          <Avatar sx={{ width: 24, height: 24 }} />
          <Typography variant="subtitle2">
            Posted by Aiken, 24 minutes ago.
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default PostCard;
