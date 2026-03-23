import Spotlight from "@/components/Spotlight/Spotlight";

/**
 * HomePage Component
 *
 * Fetches art data from the API and displays it using the ArtPieceList component.
 *
 * @returns {JSX.Element} The homepage with a list of art pieces
 */

export default function HomePage({ artPieces, favorites, onToggleFavorite }) {
  if (!artPieces || artPieces.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <main>
      <h1>Spotlight</h1>
      <Spotlight
        artPieces={artPieces}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
}
