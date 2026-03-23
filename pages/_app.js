import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation/Navigation";

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

  return (
    <>
    <Navigation />
      <GlobalStyle />
      <Component {...pageProps} artPieces={artPieces} />
    </>
  );
}
