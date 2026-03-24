import Link from "next/link";
import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const Grid = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 18px;
`;



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
    <Grid>
      {artPieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            piece={piece}
            isFavorite={favorites.includes(piece.slug)}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </Grid>
  );
}
