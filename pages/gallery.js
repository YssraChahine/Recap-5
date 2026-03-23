import ArtPieceList from "@/components/ArtPieceList";

export default function Gallery({ artPieces, favorites, onToggleFavorite }) {
  if (!artPieces || artPieces.length === 0) {
    return <p>Loading...</p>;
  }
  return (
  <main>
    <h1>Art Gallery</h1>
    {/* Pass fetched data to list component */}
    <ArtPieceList artPieces={artPieces} favorites={favorites} onToggleFavorite={onToggleFavorite} />
  </main>
  );
}
