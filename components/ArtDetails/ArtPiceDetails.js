import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton";
import ArtComments from "./ArtComments";
import Color from "./Color";
import styled from "styled-components";




const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Buttons = styled.button`
  background: none;
  border: none;
  color: #b8b6b6;
  font-size: 0.9rem;
  align-self: flex-start;
  &:hover {
    color: #d7d5d5;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 16px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div``;

const Title = styled.h1`
  margin: 0;
  font-size: 1.4rem;
`;

const Information = styled.p`
  margin: 4px 0 0;
  color: #c0bdbd;
  font-size: 0.9rem;
`;

const ColorPlate = styled.div`
  display: flex;
  gap: 10px;
`;

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
    <Wrapper>
      <Buttons onClick={() => router.back()}>Back to overview</Buttons>

      <ImageWrapper>
        <StyledImage
          src={currentArtPice.imageSource}
          width={300}
          height={450}
          alt={currentArtPice.title}
        />
      </ImageWrapper>

      <Info>
        <Text>
          <Title>{currentArtPice.title}</Title>
          <Information>
            {currentArtPice.artist} {currentArtPice.year} {currentArtPice.genre}
          </Information>
        </Text>
        {/* ❤️ Favorite toggle */}
        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={() => onToggleFavorite(currentArtPice.slug)}
        />
      </Info>
      <ColorPlate>
        {currentArtPice.colors.map((color) => {
          return <Color key={color} color={color} />;
        })}
      </ColorPlate>

      <ArtComments
        artSlug={currentArtPice.slug}
        artComments={artComments}
        handleSubmitComment={handleSubmitComment}
      />
    </Wrapper>
  );
}
