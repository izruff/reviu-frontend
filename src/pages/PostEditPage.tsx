import { Box, Button, Card, Chip, Divider, InputBase, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import V from "../utils/validation"

const PostEditPage = () => {
  const [postTitle, setPostTitle] = React.useState("");
  const [postContent, setPostContent] = React.useState("");
  const [postTags, setPostTags] = React.useState(["some", "tags", "being", "shown"]);

  React.useEffect(() => {
    // fetch previous post details and set state
  }, [])

  const navigate = useNavigate();

  function handleTitleChange(event) {
    setPostTitle(event.target.value);
  }

  function handleContentChange(event) {
    setPostContent(event.target.value)
  }

  function handleTagDelete(tagToDelete) {
    setPostTags((postTags) => postTags.filter((tag) => tag !== tagToDelete));
  }

  function handleEditPost(event) {
    // TODO: change to edit
    fetch(`${API_URL}/authorized/posts/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        title: postTitle,
        content: postContent,
        topicId: 1,
        tags: [],
      })
    })
      .then((res) => {
        if (res.status == 401) {
          throw new Error("401");
        }
        console.log("hi");

        return res.json();
      })
      .then((data) => {
        navigate(`/posts/${data.postId}`);
      })
      .catch((error) => {
        if (error.message == "401") {
          navigate("/login");
        } else {
          console.log(error)
        }
      })
  }

  return (
    <>
      <Typography variant="h2" marginBottom={4}>Create Post</Typography>
      <Card variant="outlined">
        <Box p={2}>
          <Stack direction="row" justifyContent="space-between" mb={1}>
            <Stack direction="row" spacing={4}>
              <Typography variant="subtitle2">Topic:</Typography>
              <Typography variant="subtitle2">Hub:</Typography>
            </Stack>
            <Typography variant="subtitle2">Logged in as ... (Not you?)</Typography>
          </Stack>
          <Stack direction="row" spacing={1} marginY={1}>
            {postTags.map((tag) => (
              <Chip size="small" label={tag} variant="filled" onDelete={(e) => handleTagDelete(e.target.label)} /> // TODO: how to reference the label?
            ))}
          </Stack>
          <InputBase
            fullWidth
            placeholder="Title"
            value={postTitle}
            onChange={handleTitleChange}
            
          />
        </Box>
        <Divider />
        <Box p={2}>
          <InputBase // TODO: current implementation cannot have multiple lines
            fullWidth
            placeholder="Insert your post contents here..."
            value={postContent}
            onChange={handleContentChange}
          />
        </Box>
      </Card>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button>Save Draft</Button>
        <Button variant="contained" onClick={handleEditPost}>Edit</Button>
      </Stack>
    </>
  );
};

export default PostEditPage;
