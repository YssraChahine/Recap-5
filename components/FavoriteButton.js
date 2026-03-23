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
    <button
      onClick={(e) => {
        // Prevent navigation when used inside a Link
        e.preventDefault();
        onToggle();
      }}
      aria-label="Toggle Favorite"
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}
