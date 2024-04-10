import { API_URL } from "../constants";
import PostEditor from "../components/editor/PostEditor";
import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  InputBase,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { EditorState, SerializedLexicalNode } from "lexical";

const PostCreatePage = () => {
  const [postTitle, setPostTitle] = React.useState("");
  const [postTopic, setPostTopic] = React.useState("");
  const [postTextOnlyContent, setPostTextOnlyContent] = React.useState("");
  const [postHub, setPostHub] = React.useState("");
  const [postTags, setPostTags] = React.useState([
    "some",
    "tags",
    "being",
    "shown",
  ]);

  const editorStateRef: React.MutableRefObject<EditorState | null> =
    React.useRef(null);

  const navigate = useNavigate();

  function handleTagDelete(tagToDelete: string) {
    setPostTags((postTags) => postTags.filter((tag) => tag !== tagToDelete));
  }

  function handleCreatePost() {
    updatePostTextOnlyContent();

    fetch(`${API_URL}/authorized/posts/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        title: postTitle,
        content: postTextOnlyContent,
        topic: postTopic,
        hub: postHub,
        tags: postTags,
      }),
    })
      .then((res) => {
        if (res.status == 401) {
          throw new Error("401");
        }
        return res.json();
      })
      .then((data: { postId: number }) => {
        navigate(`/posts/${data.postId}`);
      })
      .catch((error: Error) => {
        if (error.message == "401") {
          navigate("/login");
        } else {
          console.log(error);
        }
      });
  }

  function updatePostTextOnlyContent() {
    if (editorStateRef.current === null) {
      throw new Error("Cannot find editor state"); // TODO: error handling
    }

    const rootNode = editorStateRef.current.toJSON().root;
    const text = extractTextFromLexicalNode(rootNode);
    setPostTextOnlyContent(text);
  }

  function extractTextFromLexicalNode(
    node: SerializedLexicalNode & {
      children?: SerializedLexicalNode[];
      text?: string;
    },
  ): string {
    // TODO: this is probably a temporary solution, and not a strictly correct implementation
    // TODO: better type-checking
    if (node.children === undefined) {
      switch (node.type) {
        case "text":
          return node.text ?? "";
        case "linebreak":
          return "\n";
        default:
          return "";
      }
    } else {
      let text = "";
      for (const childNode of node.children) {
        text += extractTextFromLexicalNode(childNode);
      }
      return text;
    }
  }

  return (
    <>
      <Typography variant="h2" marginBottom={4}>
        Create Post
      </Typography>
      <Card variant="outlined">
        <Box p={2}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={4}>
              <Typography variant="subtitle2">Topic:</Typography>
              <TextField // TODO: implement autocomplete dropdown
                id="topic"
                value={postTopic}
                placeholder="Select a topic..."
                onChange={(e) => {
                  setPostTopic(e.target.value);
                }}
              ></TextField>
              <Typography variant="subtitle2">Hub:</Typography>
              <Select
                id="hub"
                value={postHub}
                onChange={(e) => {
                  setPostHub(e.target.value); // TODO: automatically get new search results
                }}
              >
                <MenuItem value="books">Books</MenuItem>
                <MenuItem value="movies">Movies</MenuItem>
                <MenuItem value="series">Series</MenuItem>
                <MenuItem value="anime">Anime</MenuItem>
                <MenuItem value="gaming">Gaming</MenuItem>
              </Select>
            </Stack>
            <Typography variant="subtitle2">
              Logged in as ... (Not you?)
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} marginY={1}>
            {postTags.map((tag) => (
              <Chip
                key={tag}
                size="small"
                label={tag}
                variant="filled"
                onDelete={() => {
                  handleTagDelete(tag);
                }}
              />
            ))}
          </Stack>
          <InputBase
            fullWidth
            placeholder="Title"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
            error
          />
        </Box>
        <Divider />
        <Box p={2}>
          <PostEditor editorStateRef={editorStateRef} />
        </Box>
      </Card>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button>Save Draft</Button>
        <Button variant="contained" onClick={handleCreatePost}>
          Create
        </Button>
      </Stack>
    </>
  );
};

export default PostCreatePage;
