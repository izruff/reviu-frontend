import { API_URL } from "../constants";
import { UserType } from "../types/User";
import { Card, Link, Popper, Skeleton, Typography } from "@mui/material";
import React from "react";

type Props = {
  userId: number;
};

export const UserLink = (props: Props) => {
  const [username, setUsername] = React.useState("");
  const [userData, setUserData] = React.useState<UserType | null>(null);

  const [popperAnchorEl, setPopperAnchorEl] =
    React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    fetch(`${API_URL}/public/users/id/${props.userId}/?username=true`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data: { username: string }) => {
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
      {username != "" ? (
        <Link
          href={`/users/${username}`}
          display="inline"
          variant="h6"
          color="inherit"
          underline="hover"
          onMouseOver={(e) => {
            setPopperAnchorEl(e.currentTarget);
          }}
          onMouseOut={() => {
            setPopperAnchorEl(null);
          }}
        >
          {username}
        </Link>
      ) : (
        <Skeleton width={80} sx={{ display: "inline-block" }} />
      )}
      <Popper open={popperAnchorEl !== null} anchorEl={popperAnchorEl}>
        <Card sx={{ padding: 2 }} raised>
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
      </Popper>
    </>
  );
};
