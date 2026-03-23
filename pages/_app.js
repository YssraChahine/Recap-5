import { useEffect, useState } from "react";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
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
  if (!artPieces || artPieces.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} artPieces={artPieces} />
    </>
  );
}
