import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
/**
 * ArtPiecePreview Component
 *
 * Displays a single art piece including:
 * - Image
 * - Title
 * - Artist name
 * - Favorite button
 *
 * @param {Object} props
 * @param {Object} props.piece - Single art object
 * @param {string} props.piece.imageSource - URL of the image
 * @param {string} props.piece.title - Title of the artwork
 * @param {string} props.piece.artist - Name of the artist
 * @param {boolean} props.isFavorite - Favorite status
 * @param {Function} props.onToggleFavorite - Toggle handler
 *
 * @returns {JSX.Element} A preview of the art piece
 */

export default function ArtPiecePreview({
  piece,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <Link href={`/${piece.slug}`}>
        <img src={piece.imageSource} alt={piece.title} width="300" />
      </Link>

      <h2>{piece.title}</h2>
      <p>{piece.artist}</p>

      {/* ❤️ Favorite toggle */}
      <FavoriteButton
        isFavorite={isFavorite}
        onToggle={() => onToggleFavorite(piece.slug)}
      />
    </div>
  );
}
