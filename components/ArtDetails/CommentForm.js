import styled from "styled-components";

const Textarea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 10px;
  background: white;
  color: #1c1c1e;
`;

const Button = styled.button`
  margin-top: 8px;
  padding: 10px;
  border-radius: 10px;
  background: #ff4d6d;
  border: none;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

export default function CommentForm({ slug, onSubmit }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const comment = event.target.comment.value;

        const timestamp = new Date();
        const formattedDate = timestamp.toLocaleDateString("de-DE");
        const formattedTime = timestamp.toLocaleTimeString("de-DE");

        onSubmit(slug, {
          text: comment,
          date: formattedDate,
          time: formattedTime,
        });

        event.target.reset();
      }}
    >
      <label htmlFor="comment">Comment</label>
      <Textarea name="comment" id="comment" rows="4" cols="50" />
      <Button type="submit">Add Comment</Button>
    </form>
  );
}
