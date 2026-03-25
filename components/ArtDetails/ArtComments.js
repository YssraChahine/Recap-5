import CommentForm from "./CommentForm";
import styled from "styled-components";

const Comment = styled.div`
  background: #dadadc;
  padding: 10px;
  border-radius: 12px;
  margin-bottom: 8px;
  font-size: 0.85rem;
  color: #1c1c1e;
`;
export default function ArtComments({
  artSlug,
  artComments,
  handleSubmitComment,
}) {
  return (
    <Comment>
      <h2>Comments</h2>
      {artComments &&
        artComments.comments.map((comment) => (
          <div key={comment.id}>
            <span>{`"${comment.message}"`}</span>
            <br />
            <small>
              {comment.date} um {comment.time}
            </small>
          </div>
        ))}

      <CommentForm slug={artSlug} onSubmit={handleSubmitComment} />
    </Comment>
  );
}
