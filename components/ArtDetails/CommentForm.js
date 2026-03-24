export default function CommentForm({ slug, onSubmit }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(slug, event.target.comment.value);
        event.target.reset();
      }}
    >
      <label htmlFor="comment">Comment</label>
      <textarea type="text" id="comment" rows="4" cols="50" />
      <button type="submit">Add Comment</button>
    </form>
  );
}
