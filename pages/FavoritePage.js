/**
 * Favorites Page
 *
 * Displays all art pieces that have been marked as favorites.
 */

import ArtPieceList from "@/components/ArtPieceList";

export default function FavoritesPage({
  artPieces,
  favorites,
  onToggleFavorite,
}) {
  /**
   * Filter all art pieces to only include favorites
   */
  const favoriteArtPieces = artPieces.filter((piece) =>
    favorites.includes(piece.slug)
  );

  return (
    <div>
      <h1>My Favorites</h1>

      {/* 🟡 Empty state */}
      {favoriteArtPieces.length === 0 ? (
        <p>No favorite art pieces yet.</p>
      ) : (
        <ArtPieceList
          artPieces={favoriteArtPieces}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </div>
  );
}
