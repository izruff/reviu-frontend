import Editor from "./Editor";
import { PostEditorProps } from "./EditorTypes";

const PostEditor = (props: PostEditorProps) => {
  return (
    <Editor
      initialConfig={{
        namespace: "postEditor",
        onError: (error, editor) => {},
      }}
      onChange={(editorState, editor, tags) => {
        props.editorStateRef.current = editorState;
      }}
    />
  );
};

export default PostEditor;
