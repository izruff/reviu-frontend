import { API_URL } from "../constants";
import { UserType } from "../types/User";
import TabPanel from "../components/utils/TabPanel";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const username = useParams().username;
  const [userData, setUserData] = React.useState<UserType | null>(null);
  const [tabIndex, setTabIndex] = React.useState(0);

  React.useEffect(() => {
    fetch(`${API_URL}/public/users/name/${username}`, {
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
      {userData ? (
        <Box p={2}>
          <Stack direction="row" spacing={4}>
            <Avatar sx={{ width: 200, height: 200 }} />
            <Stack direction="column" spacing={2}>
              <Typography variant="h3">{userData.username}</Typography>
              <Typography variant="h4">{userData.nickname}</Typography>
              <Typography variant="subtitle2">{userData.createdAt}</Typography>
              <Stack direction="row" spacing={4}>
                <Typography variant="h6">
                  Follower: {userData.followerCount}
                </Typography>
                <Typography variant="h6">
                  Following: {userData.followingCount}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={4}>
                <Typography variant="h6">
                  Post Count: {userData.postCount}
                </Typography>
                <Typography variant="h6">Rating: {userData.rating}</Typography>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography variant="h4">About</Typography>
              <Typography variant="body1">{userData.about}</Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Button variant="contained">Follow</Button>
            </Stack>
          </Stack>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabIndex}
              onChange={(_, value: number) => {
                setTabIndex(value);
              }}
            >
              <Tab label="Posts" />
              <Tab label="Relations" />
            </Tabs>
          </Box>
          <TabPanel tabIndex={tabIndex} index={0}>
            This user&apos;s posts and comments go here...
          </TabPanel>
          <TabPanel tabIndex={tabIndex} index={1}>
            This user&apos;s relations go here...
          </TabPanel>
        </Box>
      ) : (
        <Typography>Loading user profile...</Typography>
      )}
    </>
  );
};

export default UserPage;
