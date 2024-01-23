import CommentBody from "./CommentBody";
import { CommentTreeType } from "../types/Comment";
import { Stack } from "@mui/material";

type Props = {
  commentTree: CommentTreeType;
  rootLevel: number;
};

const CommentTree = (props: Props) => {
  return (
    <Stack direction="column">
      <CommentBody comment={props.commentTree.parent} level={props.rootLevel} />
      {props.commentTree.children.map((commentTree) => (
        <CommentTree
          key={commentTree.parent.commentId}
          commentTree={commentTree}
          rootLevel={props.rootLevel + 1}
        />
      ))}
    </Stack>
  );
};

export default CommentTree;
