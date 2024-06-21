import { UserType } from "../types/User";
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
  user: UserType;
};

const UserCard = (props: Props) => {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "16px",
        backgroundColor: "inherit",
      }}
    >
      <CardActionArea component={Link} to={`/users/${props.user.username}`}>
        <CardContent sx={{ padding: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 48, height: 48 }} />
            <Stack direction="column" spacing={2}>
              <Typography variant="h4">{props.user.username}</Typography>
              <Typography variant="subtitle2">
                {props.user.nickname || "No nickname"}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
