import { API_URL } from "../constants";
import { TopicType } from "../types/Topic";
import { Card, Link, Popper, Skeleton, Typography } from "@mui/material";
import React from "react";

type Props = {
  topic: number | TopicType;
};

export const TopicLink = (props: Props) => {
  // TODO: refactoring
  const [topicData, setTopicData] = React.useState<TopicType | null>(null);

  const [popperAnchorEl, setPopperAnchorEl] =
    React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setTopicData(null);
    if (typeof props.topic === "number") {
      fetch(`${API_URL}/public/topics/id/${props.topic}`, {
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
    } else {
      setTopicData(props.topic);
    }
  }, [props.topic]);

  return (
    <>
      {topicData ? (
        <>
          <Link
            href={`/topics/${topicData.id}`}
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
            {topicData.topic} ({topicData.hub})
          </Link>
          <Popper open={popperAnchorEl !== null} anchorEl={popperAnchorEl}>
            <Card sx={{ padding: 2 }} raised>
              <Typography>{topicData.topic}</Typography>
              <Typography>{topicData.hub}</Typography>
              <Typography>{topicData.description}</Typography>
            </Card>
          </Popper>
        </>
      ) : (
        <Skeleton width={80} sx={{ display: "inline-block" }} />
      )}
    </>
  );
};
