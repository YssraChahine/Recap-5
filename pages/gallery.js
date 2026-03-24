import ArtPieceList from "@/components/ArtPieceList";
import styled from "styled-components";
import SectionHeader from "@/components/SectionHeader";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


export default function Gallery({ artPieces, favorites, onToggleFavorite }) {
  if (!artPieces || artPieces.length === 0) {
    return <p>Loading...</p>;
  }
  return (
  <Main>
    <SectionHeader label="Explore" title="Gallery" />
    {/* Pass fetched data to list component */}
    <ArtPieceList artPieces={artPieces} favorites={favorites} onToggleFavorite={onToggleFavorite} />
  </Main>
  );
}
