import PlainTextEditor from "./editor/PlainTextEditor";
import { UserLink } from "./UserLink";
import { TopicLink } from "./TopicLink";
import { API_URL } from "../constants";
import { PostType } from "../types/Post";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowDownward,
  ArrowUpward,
  Bookmark,
  Share,
} from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  post: PostType;
};

async function handleSubmitReply(replyContent: string, postId: number) {
  const result = (await fetch(
    `${API_URL}/authorized/posts/id/${postId}/reply`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        content: replyContent,
        postId,
      }),
    },
  )
    .then((res) => {
      if (res.status == 401) {
        throw new Error("401");
      }
      return res.json();
    })
    .then((data: { commentId: number }) => {
      return {
        status: "success",
        data,
      };
    })
    .catch((error: Error) => {
      if (error.message == "401") {
        return {
          status: "unauthorized",
        };
      }
      console.log(error);
      return {
        status: "error",
      };
    })) as {
    status: string;
    data?: { commentId: number };
  };

  return result;
}

function handleUpvote() {
  console.log("Upvote");
}

function handleDownvote() {
  console.log("Downvote");
}

const PostBody = (props: Props) => {
  const [replyContent, setReplyContent] = React.useState("");
  const [replyHidden, setReplyHidden] = React.useState(true);

  const navigate = useNavigate();

  return (
    <>
      <Paper sx={{ padding: "32px" }}>
        <Stack direction="column" spacing={4}>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={{ width: 24, height: 24 }} />
              <Typography variant="subtitle2">
                Posted by <UserLink user={props.post.authorId} /> on the topic
                of <TopicLink topic={props.post.topicId} />, on{" "}
                {props.post.createdAt.toDateString()}.
              </Typography>
            </Stack>
            <Typography variant="h2">{props.post.title}</Typography>
          </Stack>
          <Typography variant="body1">{props.post.content}</Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Stack direction="row" spacing={0.5} alignItems="center">
                <IconButton size="small" onClick={handleUpvote}>
                  <ArrowUpward />
                </IconButton>
                <Typography variant="h5">0</Typography>
                <IconButton size="small" onClick={handleDownvote}>
                  <ArrowDownward />
                </IconButton>
              </Stack>
              <Button variant="outlined" startIcon={<Bookmark />}>
                Bookmark
              </Button>
              <Button variant="outlined" startIcon={<Share />}>
                Share
              </Button>
              <Typography variant="subtitle2">
                {props.post.viewCount} views.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                variant="contained"
                onClick={() => {
                  setReplyHidden(!replyHidden);
                }}
              >
                {replyHidden ? "Reply" : "Cancel"}
              </Button>
            </Stack>
          </Stack>
          {!replyHidden && (
            <>
              <Divider />
              <Typography variant="body1">Reply to This Post</Typography>
              <PlainTextEditor
                onChange={(content) => {
                  setReplyContent(content);
                }}
              />
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button
                  variant="contained"
                  onClick={() => {
                    handleSubmitReply(replyContent, props.post.id)
                      .then(({ status, data }) => {
                        if (status === "success") {
                          navigate(`/comments/${data?.commentId}`);
                        } else if (status === "unauthorized") {
                          navigate("/login");
                        } else if (status === "error") {
                          console.log("Unknown error");
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  Create
                </Button>
              </Stack>
            </>
          )}
        </Stack>
      </Paper>
    </>
  );
};

export default PostBody;
