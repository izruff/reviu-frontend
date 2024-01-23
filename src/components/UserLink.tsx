import { API_URL } from "../constants";
import { UserType } from "../types/User";
import { Card, Skeleton, Typography } from "@mui/material";
import React from "react";

type Props = {
  userId: number;
};

export const UserLink = (props: Props) => {
  const [username, setUsername] = React.useState("");
  const [userData, setUserData] = React.useState<UserType | null>(null);
  const [contentVisible, setContentVisible] = React.useState(false);

  React.useEffect(() => {
    fetch(`${API_URL}/public/users/id/${props.userId}/?username=true`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsername(data.username);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetch(`${API_URL}/public/users/id/${props.userId}/?username=false`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data: UserType) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Typography
        display="inline"
        variant="h6"
        onMouseOver={() => {
          setContentVisible(true);
        }}
        onMouseOut={() => {
          setContentVisible(false);
        }}
      >
        {username ? (
          username
        ) : (
          <Skeleton width={80} sx={{ display: "inline-block" }} />
        )}
      </Typography>
      {contentVisible && (
        <Card sx={{ display: "relative" }}>
          <Typography>{userData ? userData.username : <Skeleton />}</Typography>
          <Typography>{userData ? userData.nickname : <Skeleton />}</Typography>
          <Typography>{userData ? userData.about : <Skeleton />}</Typography>
          <Typography>
            {userData ? userData.createdAt : <Skeleton />}
          </Typography>
          <Typography>
            {userData ? userData.followerCount : <Skeleton />}
          </Typography>
          <Typography>
            {userData ? userData.followingCount : <Skeleton />}
          </Typography>
          <Typography>
            {userData ? userData.postCount : <Skeleton />}
          </Typography>
          <Typography>{userData ? userData.rating : <Skeleton />}</Typography>
        </Card>
      )}
    </>
  );
};
