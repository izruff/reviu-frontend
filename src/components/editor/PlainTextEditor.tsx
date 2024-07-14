import Editor from "./Editor";
import { PlainTextEditorProps } from "./EditorTypes";
import { EditorState, SerializedLexicalNode } from "lexical";
import React from "react";

const PlainTextEditor = (props: PlainTextEditorProps) => {
  const editorStateRef: React.MutableRefObject<EditorState | null> =
    React.useRef(null);

  function getPlainText() {
    if (editorStateRef.current === null) {
      throw new Error("Cannot find editor state"); // TODO: error handling
    }

    const rootNode = editorStateRef.current.toJSON().root;
    const text = extractPlainTextFromLexicalNode(rootNode);

    return text;
  }

  function extractPlainTextFromLexicalNode(
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
        text += extractPlainTextFromLexicalNode(childNode);
      }
      return text;
    }
  }

  return (
    <Editor
      initialConfig={{
        namespace: "plainTextEditor",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onError: (error, _editor) => {
          // TODO: create error message handling and display
          console.log(error);
        },
      }}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange={(editorState, _editor, _tags) => {
        editorStateRef.current = editorState;
        if (props.onChange) {
          props.onChange(getPlainText());
        }
      }}
    />
  );
};

export default PlainTextEditor;
