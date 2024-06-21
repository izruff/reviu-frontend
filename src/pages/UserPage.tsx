import { API_URL } from "../constants";
import { UserType } from "../types/User";
import { PostType } from "../types/Post";
import ActivityCard from "../components/ActivityCard";
import UserCard from "../components/UserCard";
import TabPanel from "../components/utils/TabPanel";
import { useAppSelector } from "../app/hooks";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const username = useParams().username;
  const [userData, setUserData] = React.useState<UserType | null>(null);
  const [userActivity, setUserActivity] = React.useState<PostType[]>([]);
  const [userFollowers, setUserFollowers] = React.useState<UserType[]>([]);
  const [userFollowings, setUserFollowings] = React.useState<UserType[]>([]);
  const [selectedRelations, setSelectedRelations] =
    React.useState<string>("followers");
  const [relationsSearch, setRelationsSearch] = React.useState<string>("");
  const [tabIndex, setTabIndex] = React.useState(0);

  const loggedInUsername = useAppSelector(
    (state) => state.auth.userData?.username,
  );

  React.useEffect(() => {
    fetch(`${API_URL}/public/users/name/${username}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
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
  }, [username]);

  React.useEffect(() => {
    fetch(`${API_URL}/public/posts/search?authors=${username}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((rawData) => {
        /* eslint-disable */
        for (let post of rawData) {
          post.createdAt = new Date(post.createdAt);
          post.updatedAt = new Date(post.updatedAt);
          post.deletedAt = new Date(post.deletedAt);
        }
        return rawData;
        /* eslint-enable */
      })
      .then((data: PostType[]) => {
        setUserActivity(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  React.useEffect(() => {
    fetch(`${API_URL}/public/users/name/${username}/relations`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((rawData) => {
        /* eslint-disable */
        for (let user of rawData.followers) {
          user.createdAt = new Date(user.createdAt);
        }
        for (let user of rawData.followings) {
          user.createdAt = new Date(user.createdAt);
        }
        return rawData;
        /* eslint-enable */
      })
      .then((data: { followers: UserType[]; followings: UserType[] }) => {
        setUserFollowers(data.followers);
        setUserFollowings(data.followings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  return (
    <>
      {userData ? (
        <Box p={2}>
          <Stack direction="row" spacing={6} justifyContent="space-between">
            <Stack direction="row" spacing={6} alignItems="center">
              <Avatar sx={{ width: 200, height: 200 }} />
              <Stack direction="column" spacing={2}>
                <Typography variant="h2">{userData.username}</Typography>
                <Typography variant="h4">
                  {userData.nickname || "No nickname"}
                </Typography>
                <Typography variant="body1">
                  {userData.about || "No description provided."}
                </Typography>
                <Typography variant="h6">Rating: {userData.rating}</Typography>
                <Typography variant="subtitle2">
                  Member since {userData.createdAt.toDateString()}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={2}>
              {loggedInUsername === username ? (
                <>
                  <Button variant="contained">Edit</Button>
                </>
              ) : (
                <>
                  <Button variant="contained">Follow</Button>
                </>
              )}
            </Stack>
          </Stack>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} my={2}>
            <Tabs
              value={tabIndex}
              onChange={(_, value: number) => {
                setTabIndex(value);
              }}
            >
              <Tab label="Activity" />
              <Tab label="Relations" />
              {loggedInUsername === username && [
                /* eslint-disable */
                <Tab label="Settings" />,
                /* eslint-enable */
              ]}
            </Tabs>
          </Box>
          <TabPanel tabIndex={tabIndex} index={0}>
            <Stack direction="column" spacing={2}>
              {userActivity.map((activity) => (
                <ActivityCard key={activity.id} post={activity} /> // TODO: ActivityCard component will be changed to include comments and other types of activity
              ))}
            </Stack>
          </TabPanel>
          <TabPanel tabIndex={tabIndex} index={1}>
            <Stack direction="row" spacing={2}>
              <Select
                id="relations-select"
                label=""
                value={selectedRelations}
                onChange={(e) => {
                  setSelectedRelations(e.target.value); // TODO: automatically get new search results
                }}
              >
                <MenuItem value="followers">Followers</MenuItem>
                <MenuItem value="followings">Followings</MenuItem>
              </Select>
              <TextField // TODO: implement autocomplete dropdown
                id="relations-search"
                label="Search"
                value={relationsSearch}
                placeholder="Search for username..."
                onChange={(e) => {
                  setRelationsSearch(e.target.value);
                }}
                fullWidth
              />
            </Stack>
            <Grid container spacing={2}>
              {selectedRelations === "followers"
                ? userFollowers.map((user) => (
                    <UserCard key={user.username} user={user} />
                  ))
                : userFollowings.map((user) => (
                    <UserCard key={user.username} user={user} />
                  ))}
            </Grid>
          </TabPanel>
          {loggedInUsername === username && (
            <>
              <TabPanel tabIndex={tabIndex} index={2}>
                This user&apos;s settings go here...
              </TabPanel>
            </>
          )}
        </Box>
      ) : (
        <Typography>Loading user profile...</Typography>
      )}
    </>
  );
};

export default UserPage;
