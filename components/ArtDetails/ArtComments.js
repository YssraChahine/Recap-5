import CommentForm from "./CommentForm";

export default function ArtComments({
  artSlug,
  artComments,
  handleSubmitComment,
}) {
  return (
    <>
      <h2>Comments</h2>
      {artComments && console.log(artComments.comments)}

      {artComments &&
        artComments.comments.map((comment) => (
          <span key={comment.id}>{`"${comment.message}"`}</span>
        ))}

      <CommentForm slug={artSlug} onSubmit={handleSubmitComment} />
    </>
  );
}
