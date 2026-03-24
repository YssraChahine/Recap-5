import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  z-index: 1;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0,0,0,0.12),
    0 2px 8px rgba(0,0,0,0.06);
  transition: all 0.25s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  opacity: 0;
  transition: opacity 0.4s ease;
  &.loaded {
    opacity: 1;
  }
`;

const Content = styled.div`
  padding: 12px;
`;

const Title = styled.h2`
  font-size: 0.95rem;
  margin: 0 0 4px;
`;

const Artist = styled.p`
  font-size: 0.8rem;
  color: #777;
  margin: 4px 0 8px;
`;

/**
 * ArtPiecePreview Component
 *
 * Displays a single art piece including:
 * - Image
 * - Title
 * - Artist name
 * - Favorite button
 *
 * @param {Object} props
 * @param {Object} props.piece - Single art object
 * @param {string} props.piece.imageSource - URL of the image
 * @param {string} props.piece.title - Title of the artwork
 * @param {string} props.piece.artist - Name of the artist
 * @param {boolean} props.isFavorite - Favorite status
 * @param {Function} props.onToggleFavorite - Toggle handler
 *
 * @returns {JSX.Element} A preview of the art piece
 */

export default function ArtPiecePreview({
  piece,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <Card>
      <Link href={`/${piece.slug}`}>
        <Image
          src={piece.imageSource}
          alt={piece.title}
          // width="300"
          onLoad={(e) => e.currentTarget.classList.add("loaded")}
        />
      </Link>

      <Content>
        <Title>{piece.title}</Title>
        <Artist>{piece.artist}</Artist>

        {/* ❤️ Favorite toggle */}
        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={() => onToggleFavorite(piece.slug)}
        />
      </Content>
    </Card>
  );
}
