/**
 * ArtPiecePreview Component
 *
 * Displays a single art piece including:
 * - Image
 * - Title
 * - Artist name
 *
 * @param {Object} props
 * @param {Object} props.piece - Single art object
 * @param {string} props.piece.imageSource - URL of the image
 * @param {string} props.piece.title - Title of the artwork
 * @param {string} props.piece.artist - Name of the artist
 *
 * @returns {JSX.Element} A preview of the art piece
 */

export default function ArtPiecePreview({ piece }) {
  return (
    <div>
      <img src={piece.imageSource} alt={piece.title} width="300" />
      <h2>{piece.title}</h2>
      <p>{piece.artist}</p>
    </div>
  );
}
