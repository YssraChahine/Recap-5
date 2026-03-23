import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton";
import ArtComments from "./ArtComments";
/**
 * ArtPiceDetails Component
 *
 * Displays a single art piece including:
 * - Image
 * - Title
 * - Artist name
 * - Year
 * - Genre
 *
 * @param {Object} props
 * @param {Object} props.piece - Single art object
 * @param {string} props.piece.imageSource - URL of the image
 * @param {string} props.piece.title - Title of the artwork
 * @param {string} props.piece.artist - Name of the artist
 * @param {string} props.piece.year - Year of the Art
 * @param {string} props.piece.genre - Genre of the Art
 * @param {Object} props.currentArtPice - Current artwork
 * @param {boolean} props.isFavorite - Favorite status
 * @param {Function} props.onToggleFavorite - Toggle handler
 *
 *
 * @returns {JSX.Element} Displays the Art itself including all the details.
 */

export default function ArtPiceDetails({
  currentArtPice,
  isFavorite,
  onToggleFavorite,
  artComments,
  handleSubmitComment,
}) {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.back()}>Back to overview</button>

      <h1>{currentArtPice.name}</h1>

      <Image
        src={currentArtPice.imageSource}
        width={300}
        height={450}
        alt={currentArtPice.name}
      />

      <p>
        {currentArtPice.artist} {currentArtPice.year} {currentArtPice.genre}
      </p>
      {/* ❤️ Favorite toggle */}
      <FavoriteButton
        isFavorite={isFavorite}
        onToggle={() => onToggleFavorite(currentArtPice.slug)}
      />
      <ArtComments
        artSlug={currentArtPice.slug}
        artComments={artComments}
        handleSubmitComment={handleSubmitComment}
      />
    </>
  );
}
