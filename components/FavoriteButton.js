import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: none;
  font-size: 1.3rem;
  color: ${({ $active }) => ($active ? "#e63946" : "#bbb")};
  transition: 0.2s;
  &:active {
    transform: scale(0.95);
  }
`;

/**
 * FavoriteButton Component
 *
 * A reusable button that:
 * - Displays whether an item is a favorite
 * - Allows toggling the favorite state
 *
 * @param {Object} props
 * @param {boolean} props.isFavorite - Current favorite status
 * @param {Function} props.onToggle - Function to toggle favorite state
 */

export default function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <Button
      $active={isFavorite}
      onClick={(e) => {
        // Prevent navigation when used inside a Link
        e.preventDefault();
        onToggle();
      }}
      aria-label="Toggle Favorite"
    >
      {isFavorite ? "❤️" : "🤍"}
    </Button>
  );
}
