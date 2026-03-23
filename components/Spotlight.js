import ArtPiecePreview from "./ArtPiecePreview";

export default function Spotlight ({artPieces}) {
    //select random art piece
    function getRandomArtPiece (img) {
        const randomImg = Math.floor(Math.random() * img.length);
        return img[randomImg]
    }
    //choose random art piece and pass it to the preview component
    const randomArtPiece = getRandomArtPiece(artPieces);
    return (
        <section>
            <ArtPiecePreview piece={randomArtPiece} />
        </section>
    );
}