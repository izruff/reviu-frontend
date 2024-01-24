import { API_URL } from "../constants";
import { UserType } from "../types/User";
import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";

type Props = {
  userId: number;
};

const UserPage = (props: Props) => {
  const [userData, setUserData] = React.useState<UserType | null>(null);

  React.useEffect(() => {
    fetch(`${API_URL}/public/users/id/${props.userId}/?username=false`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {userData ? (
        <>
          <Avatar sx={{ width: 120, height: 120 }} />
          <Typography variant="h3">{userData.username}</Typography>
          <Typography variant="h4">{userData.nickname}</Typography>
          <Typography variant="body1">{userData.about}</Typography>
          <Typography variant="subtitle2">{userData.createdAt}</Typography>
          <Stack direction="row" spacing={4}>
            <Typography variant="h6">Follower</Typography>
            <Typography variant="h6">Following</Typography>
            <Typography variant="h6">Post Count</Typography>
            <Typography variant="h6">Rating</Typography>
          </Stack>
        </>
      ) : (
        <Typography>Loading user profile...</Typography>
      )}
    </>
  );
};

export default UserPage;
