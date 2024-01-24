import { Box, Chip, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const PostCreatePage = () => {
  const [topic, setTopic] = React.useState("");
  const [tags, setTags] = React.useState([]);

  return (
    <>
      <Typography variant="h2">Create Post</Typography>
      <Stack direction="row" justifyContent="space-between">
        <TextField id="topic" label="Topic" />
        <TextField id="tags" label="Tags" />
        <TextField id="title" label="Title" />
      </Stack>
      <Box>
        <Chip label="Topic: lorem-ipsum" variant="outlined" />
        <Chip label="some" variant="filled" />
        <Chip label="tags" variant="filled" />
        <Chip label="being" variant="filled" />
        <Chip label="shown" variant="filled" />
      </Box>
    </>
  );
};

export default PostCreatePage;
