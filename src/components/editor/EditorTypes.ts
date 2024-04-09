import { InitialConfigType } from "@lexical/react/LexicalComposer";
import { EditorState, LexicalEditor } from "lexical";

export type EditorProps = {
  initialConfig: InitialConfigType;
  onChange: (
    editorState: EditorState,
    editor: LexicalEditor,
    tags: Set<string>,
  ) => void;
};

export type PostEditorProps = unknown;
