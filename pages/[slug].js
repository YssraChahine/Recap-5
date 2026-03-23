import ArtPiceDetails from "@/components/ArtDetails/ArtPiceDetails";
import { useRouter } from "next/router";

/**
 * Dynamic Art Piece Page
 *
 * Finds the correct artwork based on the URL slug
 * and passes it to the details component.
 */

export default function ArtPice({
  artPieces,
  favorites,
  onToggleFavorite,
  artComments,
  handleSubmitComment,
}) {
  const router = useRouter();
  const { slug } = router.query;

  // Find matching art piece
  const currentArtPice = artPieces.find((artPice) => artPice.slug === slug);

  // find current art comments
  const currentArtComments = artComments.find(
    (comments) => comments.slug == slug
  );

  if (!currentArtPice) {
    return <h1>Art piece not found</h1>;
  }

  return (
    <ArtPiceDetails
      currentArtPice={currentArtPice}
      isFavorite={favorites.includes(currentArtPice.slug)}
      onToggleFavorite={onToggleFavorite}
      artComments={currentArtComments}
      handleSubmitComment={handleSubmitComment}
    />
  );
}
