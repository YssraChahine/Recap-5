import { useEffect, useState } from "react";
import GlobalStyle from "../styles";

/**
 * App Component (Root)
 *
 * Responsibilities:
 * - Fetching art data from API
 * - Managing global application state (favorites)
 * - Passing data and handlers down to all pages
 */

export default function App({ Component, pageProps }) {
  // State to store all art pieces
  const [artPieces, setArtPieces] = useState([]);

  // ❤️ Stores favorite art piece identifiers (slugs)
  const [favorites, setFavorites] = useState([]);

  /**
   * Fetch art data once when the app mounts
   */
  useEffect(() => {
    async function fetchArt() {
      const response = await fetch("https://example-apis.vercel.app/api/art");
      const data = await response.json();
      setArtPieces(data);
    }

    fetchArt();
  }, []);
  if (!artPieces || artPieces.length === 0) {
    return <p>Loading...</p>;
  }
  /**
   * Toggles the favorite status of an art piece
   *
   * @param {string} slug - Unique identifier of the art piece
   *
   * Behavior:
   * - If already a favorite → remove it
   * - If not → add it
   */
  function handleToggleFavorite(slug) {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(slug)) {
        //Remove from favorites
        return prevFavorites.filter((fav) => fav !== slug);
      } else {
        //Add to favorites
        return [...prevFavorites, slug];
      }
    });
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
