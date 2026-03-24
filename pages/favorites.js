/**
 * Favorites Page
 *
 * Displays all art pieces that have been marked as favorites.
 */

import ArtPieceList from "@/components/ArtPieceList";
import styled from "styled-components";
import SectionHeader from "@/components/SectionHeader";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EmptyState = styled.div`
  text-align: center;
  margin-top: 40px;
  color: #777;
`;

export default function FavoritesPage({
  artPieces,
  favorites,
  onToggleFavorite,
}) {
  /**
   * Filter all art pieces to only include favorites
   */
  const favoriteArtPieces = artPieces.filter((piece) =>
    favorites.includes(piece.slug)
  );
  return (
    <Wrapper>
      <SectionHeader label="Your Collection" title="My Favorites" />

      {/* 🟡 Empty state */}
      {favoriteArtPieces.length === 0 ? (
        <EmptyState>
          <p>No favorite art pieces yet.</p>
          <p style={{ fontSize: "0.9rem" }}>
            Start adding some artworks you like.
          </p>
        </EmptyState>
      ) : (
        <ArtPieceList
          artPieces={favoriteArtPieces}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </Wrapper>
  );
}
