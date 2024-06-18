import noMoreContentImg from "../assets/no-more-content.png";
import { API_URL } from "../constants";
import PostBody from "../components/PostBody";
import { CommentTreeType, CommentType } from "../types/Comment";
import CommentTree from "../components/CommentTree";
import { PostType } from "../types/Post";
import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

/*
type Props = {
  surfaceLevelLimit?: number;
  replyLimit?: number;
};
*/

async function getReplies(commentId: number) {
  const data = (await fetch(
    `${API_URL}/public/comments/id/${commentId}/replies`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
      return [];
    })) as CommentType[];

  return data;
}

async function getCommentTree(postId: number, comment: CommentType) {
  const replies = await getReplies(comment.commentId);
  if (replies.length === 0) {
    return {
      parent: comment,
      children: [],
    };
  }
  const commentTree: CommentTreeType = {
    parent: comment,
    children: await Promise.all(
      replies.map(async (reply) => await getCommentTree(postId, reply)),
    ),
  };
  return commentTree;
}

const PostPage = () => {
  // TODO: implement props functionality, that is, limit the comment count and make a "load more" button that gets a fixed number of additional comments
  const postIdParam = useParams().postId;
  const [postData, setPostData] = React.useState<PostType | null>(null);
  const [commentsData, setCommentsData] = React.useState<CommentTreeType[]>([]);

  const postId = Number(postIdParam);
  if (isNaN(postId)) {
    throw new Error("invalid post ID format");
  }

  // Get post body
  React.useEffect(() => {
    fetch(`${API_URL}/public/posts/id/${postId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data: PostType) => {
        setPostData({
          postId: postId,
          title: data.title,
          content: data.content,
          authorId: data.authorId,
          topicId: data.topicId,
          createdAt: data.createdAt,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Get comments and its replies
  React.useEffect(() => {
    fetch(`${API_URL}/public/posts/id/${postId}/replies`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then(async (data: CommentType[]) => {
        const commentTrees = await Promise.all(
          data.map(
            async (comment: CommentType) =>
              await getCommentTree(postId, comment),
          ),
        );
        setCommentsData(commentTrees);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {postData !== null ? (
        <>
          <PostBody post={postData} />
          <Typography variant="h4" marginTop={8} marginBottom={4}>
            COMMENTS
          </Typography>
          {commentsData.length ? (
            <>
              {commentsData.map((commentTree) => (
                <CommentTree
                  key={commentTree.parent.commentId}
                  commentTree={commentTree}
                  rootLevel={0}
                />
              ))}
              <Typography variant="body2">Load more comments...</Typography>
            </>
          ) : (
            <>
              <Stack alignItems="center" spacing={2} mb={2}>
                <img src={noMoreContentImg} alt="No content." width={120} />
                <Typography variant="body1">
                  Looks like there are no comments yet...
                </Typography>
              </Stack>
            </>
          )}
        </>
      ) : (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      )}
    </>
  );
};

export default PostPage;
