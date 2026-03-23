import { useMemo } from "react";
import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({ artPieces, favorites = [], onToggleFavorite }) {
  //select random art piece
   const randomArtPiece = useMemo(() => {
    if (!artPieces || artPieces.length === 0) return null;

    const randomPiece = Math.floor(Math.random() * artPieces.length);
    return artPieces[randomPiece];
  }, [artPieces]);
  if (!randomArtPiece) {
    return <p>Loading...</p>;
  }
  
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
