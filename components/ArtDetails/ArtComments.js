import { useState } from "react";
import CommentForm from "./CommentForm";
import { uid } from "uid";

export default function ArtComments({ artSlug }) {
  const [artComments, setArtComments] = useState();

  function handleSubmitComment(comment) {
    const id = uid();

    setArtComments((prevArtComments) => {
      prevArtComments.map((artComments) => {
        if (artComments.slug != artSlug) return artComments;
      });

      return {
        ...artComments,
        comments: [...artComments.comments, { id: id, message: comment }],
      };
    });
  }

  return (
    <>
      <h2>Comments</h2>
      <ul>
        {artComments?.filter((artComment) => {
          if (artComment.slug == artSlug) {
            artComment.comments.map((comment) => {
              <li key={comment.id}>{comment.message}</li>;
            });
          }
        })}
      </ul>
      <CommentForm onSubmit={handleSubmitComment} />
    </>
  );
}
