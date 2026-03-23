import ArtPiceDetails from "@/components/ArtDetails/ArtPiceDetails";
import { useRouter } from "next/router";

export default function ArtPice({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPice = artPieces.find((artPice) => artPice.slug === slug);

  if (!currentArtPice) {
    return <h1>ArtPice not found</h1>;
  }

  return <ArtPiceDetails currentArtPice={currentArtPice} />;
}
