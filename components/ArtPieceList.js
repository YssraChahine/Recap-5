import Link from "next/link";
import ArtPiecePreview from "./ArtPiecePreview";
/**
 * ArtPieceList Component
 *
 * Renders a list of art pieces.
 *
 * @param {Object} props
 * @param {Array} props.artPieces - Array of art objects
 * @param {Array} props.favorites- List of favorite slugs
 * @param {Function} props.onToggleFavorite - Toggle handler
 * @returns {JSX.Element} A list of art pieces
 */

export default function ArtPieceList({
  artPieces,
  favorites,
  onToggleFavorite,
}) {
  return (
    <ul>
      {artPieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/${piece.slug}`}>
            <ArtPiecePreview
              piece={piece}
              // Check if current piece is a favorite
              isFavorite={favorites.includes(piece.slug)}
              onToggleFavorite={onToggleFavorite}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
