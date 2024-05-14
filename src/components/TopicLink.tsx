import { API_URL } from "../constants";
import { TopicType } from "../types/Topic";
import { Card, Link, Popper, Skeleton, Typography } from "@mui/material";
import React from "react";

type Props = {
  topicId: number;
};

export const TopicLink = (props: Props) => {
  // TODO: refactoring
  const [topic, setTopic] = React.useState("");
  const [topicData, setTopicData] = React.useState<TopicType | null>(null);

  const [popperAnchorEl, setPopperAnchorEl] =
    React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    fetch(`${API_URL}/public/topics/id/${props.topicId}/?topic=true`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data: { topic: string }) => {
        setTopic(data.topic);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetch(`${API_URL}/public/topics/id/${props.topicId}/?topic=false`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data: TopicType) => {
        setTopicData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {topic != "" ? (
        <Link
          href={`/topics/${props.topicId}`}
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
          {topic}
        </Link>
      ) : (
        <Skeleton width={80} sx={{ display: "inline-block" }} />
      )}
      <Popper open={popperAnchorEl !== null} anchorEl={popperAnchorEl}>
        <Card sx={{ padding: 2 }} raised>
          <Typography>{topicData ? topicData.topic : <Skeleton />}</Typography>
          <Typography>{topicData ? topicData.hub : <Skeleton />}</Typography>
          <Typography>
            {topicData ? topicData.description : <Skeleton />}
          </Typography>
        </Card>
      </Popper>
    </>
  );
};
