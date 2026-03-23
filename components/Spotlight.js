import ArtPiecePreview from "./ArtPiecePreview";

/**
 * Spotlight Component
 *
 * Displays a random artwork from the list,
 * including the favorite functionality.
 */

export default function Spotlight({ artPieces, favorites, onToggleFavorite }) {
  /**
   * Returns a random art piece from the array
   */
  function getRandomArtPiece(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  const randomArtPiece = getRandomArtPiece(artPieces);

  return (
    <section>
      <ArtPiecePreview
        piece={randomArtPiece}
        isFavorite={favorites.includes(randomArtPiece.slug)}
        onToggleFavorite={onToggleFavorite}
      />
    </section>
  );
}
