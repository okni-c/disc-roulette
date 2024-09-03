import process from "process";
export async function getLastFMAlbumArt(album: string, artist: string) {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.LAST_FM_API_KEY}&artist=${artist}&album=${album}&format=json`);
    const data = await response.json();
    const albumArtUrl = data.album;
    
    if (albumArtUrl && albumArtUrl.image[3]["#text"]) {
        return albumArtUrl.image[3]["#text"];
    } else {
        return '/ganj.png'
    }
}