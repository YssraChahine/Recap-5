import styled from "styled-components";
import { useMemo } from "react";
import FavoriteButton from "../FavoriteButton";
import SectionHeader from "@/components/SectionHeader";


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.06);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background: #000000a9;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Text = styled.div`
  color: white;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.3rem;
`;

const Artist = styled.p`
  margin-top: 2px;
  font-size: 0.85rem;
  opacity: 0.85;
`;

export default function Spotlight({ artPieces, favorites, onToggleFavorite }) {
  const randomArtPiece = useMemo(() => {
    if (!artPieces.length) return null;
    return artPieces[Math.floor(Math.random() * artPieces.length)];
  }, [artPieces]);

  if (!randomArtPiece) return null;

  return (
    <Wrapper>
      <SectionHeader label="Discover" title="Spotlight" />
      <Hero>
        <Image src={randomArtPiece.imageSource} alt={randomArtPiece.title} />

        <Overlay>
          <Text>
            <Title>{randomArtPiece.title}</Title>
            <Artist>{randomArtPiece.artist}</Artist>
          </Text>

          <FavoriteButton
            isFavorite={favorites.includes(randomArtPiece.slug)}
            onToggle={() => onToggleFavorite(randomArtPiece.slug)}
          />
        </Overlay>
      </Hero>
    </Wrapper>
  );
}
