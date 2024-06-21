import { API_URL } from "../constants";
import { UserType } from "../types/User";
import { Card, Link, Popper, Skeleton, Typography } from "@mui/material";
import React from "react";

type Props = {
  user: number | string | UserType;
};

export const UserLink = (props: Props) => {
  const [userData, setUserData] = React.useState<UserType | null>(null);

  const [popperAnchorEl, setPopperAnchorEl] =
    React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setUserData(null);
    if (typeof props.user === "number" || typeof props.user === "string") {
      fetch(
        `${API_URL}/public/users/${
          typeof props.user === "number" ? "id" : "name"
        }/${props.user}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      )
        .then((res) => {
          return res.json();
        })
        .then((rawData) => {
          /* eslint-disable */
          rawData.createdAt = new Date(rawData.createdAt);
          return rawData;
          /* eslint-enable */
        })
        .then((data: UserType) => {
          setUserData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setUserData(props.user);
    }
  }, [props.user]);

  return (
    <>
      {userData ? (
        <>
          <Link
            href={`/users/${userData.username}`}
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
            {userData.username}
          </Link>
          <Popper open={popperAnchorEl !== null} anchorEl={popperAnchorEl}>
            <Card sx={{ padding: 2 }} raised>
              <Typography>{userData.username}</Typography>
              <Typography>{userData.nickname}</Typography>
              <Typography>{userData.about}</Typography>
              <Typography>{userData.createdAt.toDateString()}</Typography>
              <Typography>{userData.rating}</Typography>
            </Card>
          </Popper>
        </>
      ) : (
        <Skeleton width={80} sx={{ display: "inline-block" }} />
      )}
    </>
  );
};
