export default function CommentForm({ onSubmit }) {
  return (
    <form onSubmit={(event) => onSubmit(event.target.comment.value)}>
      <label htmlFor="comment">Comment</label>
      <textarea type="text" id="comment" rows="4" cols="50" />
      <button type="submit">Add Comment</button>
    </form>
  );
}
