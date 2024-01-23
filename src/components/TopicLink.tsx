import { API_URL } from "../constants";
import { TopicType } from "../types/Topic";
import { Card, Skeleton, Typography } from "@mui/material";
import React from "react";

type Props = {
  topicId: number;
};

export const TopicLink = (props: Props) => {
  const [topic, setTopic] = React.useState("");
  const [topicData, setTopicData] = React.useState<TopicType | null>(null);
  const [contentVisible, setContentVisible] = React.useState(false);

  React.useEffect(() => {
    fetch(`${API_URL}/public/topics/id/${props.topicId}/?topic=true`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
        {topic ? (
          topic
        ) : (
          <Skeleton width={80} sx={{ display: "inline-block" }} />
        )}
      </Typography>
      {contentVisible && (
        <Card sx={{ display: "relative" }}>
          <Typography>{topicData ? topicData.topic : <Skeleton />}</Typography>
          <Typography>{topicData ? topicData.hub : <Skeleton />}</Typography>
          <Typography>
            {topicData ? topicData.description : <Skeleton />}
          </Typography>
        </Card>
      )}
    </>
  );
};
