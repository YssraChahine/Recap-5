import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation/Navigation";
import { uid } from "uid";

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

  // Stores Comments for art pieces
  const [artComments, setArtComments] = useState([]);

  /**
   * Fetch art data once when the app mounts
   */
  useEffect(() => {
    async function fetchArt() {
      try {
        const response = await fetch("https://example-apis.vercel.app/api/art");
        const data = await response.json();
        setArtPieces(data);
      } catch (error) {
        console.error("Error fetching art data:", error);
      }
    }
    fetchArt();
  }, []);
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

  function handleSubmitComment(slug, comment) {
    const id = uid();
    const artPieceComments = artComments.find(
      (comments) => comments.slug === slug
    );

    if (artPieceComments) {
      setArtComments(
        artComments.map((commentList) => {
          if (commentList.slug === slug) {
            return {
              ...commentList,
              comments: [...commentList.comments, { id, message: comment }],
            };
          } else {
            return commentList;
          }
        })
      );
    } else {
      setArtComments([
        ...artComments,
        { slug, comments: [{ id, message: comment }] },
      ]);
    }
  }

  return (
    <>
      <Navigation />
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={artPieces}
        favorites={favorites}
        artComments={artComments}
        onToggleFavorite={handleToggleFavorite}
        handleSubmitComment={handleSubmitComment}
      />
    </>
  );
}
