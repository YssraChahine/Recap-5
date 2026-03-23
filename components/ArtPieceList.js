import ArtPiecePreview from "./ArtPiecePreview";
/**
 * ArtPieceList Component
 *
 * Renders a list of art pieces.
 *
 * @param {Object} props
 * @param {Array} props.artPieces - Array of art objects
 * @returns {JSX.Element} A list of art pieces
 */

export default function ArtPieceList({ artPieces }) {
  return (
    <ul>
      {artPieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview piece={piece} />
        </li>
      ))}
    </ul>
  );
}
