import { InitialConfigType } from "@lexical/react/LexicalComposer";
import { EditorState, LexicalEditor } from "lexical";
import React from "react";

export type EditorProps = {
  initialConfig: InitialConfigType;
  onChange: (
    editorState: EditorState,
    editor: LexicalEditor,
    tags: Set<string>,
  ) => void;
};

export type PostEditorProps = {
  editorStateRef: React.MutableRefObject<EditorState | null>;
};
