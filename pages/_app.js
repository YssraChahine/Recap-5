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
  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== "undefined") {
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    }
    return [];
  });

  // Stores Comments for art pieces
  const [artComments, setArtComments] = useState(() => {
    if (typeof window !== "undefined") {
      const savedComments = localStorage.getItem("artComments");
      return savedComments ? JSON.parse(savedComments) : [];
    }
    return [];
  });

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

  // Speichert Favoriten in localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Speichert Kommentare in localStorage
  useEffect(() => {
    localStorage.setItem("artComments", JSON.stringify(artComments));
  }, [artComments]);

  
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
    console.log("SLUG:", slug); // 👈 hinzufügen
    setFavorites((prevFavorites) => {
      const updated = prevFavorites.includes(slug)
        ? prevFavorites.filter((fav) => fav !== slug)
        : [...prevFavorites, slug];
      return updated;
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
