import ArtPieceList from "@/components/ArtPieceList";

export default function ArtPieces({ artPieces }) {
  if (!artPieces || artPieces.length === 0) {
    return <p>Loading...</p>;
  }
  return (
  <main>
    <h1>Art Gallery</h1>
    {/* Pass fetched data to list component */}
    <ArtPieceList artPieces={artPieces} />
  </main>
  );
}
