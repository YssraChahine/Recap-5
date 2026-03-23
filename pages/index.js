import { useEffect, useState } from "react";
import ArtPieceList from "../components/ArtPieceList";
/**
 * HomePage Component
 *
 * Fetches art data from the API and displays it using the ArtPieceList component.
 *
 * @returns {JSX.Element} The homepage with a list of art pieces
 */

export default function HomePage() {
  // State to store all art pieces
  const [artPieces, setArtPieces] = useState([]);

  /**
   * Fetches art data from the API
   */

  useEffect(() => {
    async function fetchArt() {
      const response = await fetch("https://example-apis.vercel.app/api/art");
      const data = await response.json();
      setArtPieces(data);
    }

    fetchArt();
  }, []);

  return (
    <div>
      <h1>Art Gallery</h1>
      {/* Pass fetched data to list component */}
      <ArtPieceList artPieces={artPieces} />
    </div>
  );
}
