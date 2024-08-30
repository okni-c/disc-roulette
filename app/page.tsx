import AlbumTable from "@/components/custom/album-table";
import CurrentAlbum from "@/components/custom/current-album";

const data: TableConfig<AlbumData> = {
  label: "Recent Reviews",
  description:
    "A list of recent album reviews with various genres and ratings.",
  headers: ["Album Title", "Artist", "Genre", "Rating"],
  rows: [
    {
      album_title: "Echoes of Time",
      artist: "The Silent Waves",
      genre: "Ambient",
      rating: "3.56",
    },
    {
      album_title: "Midnight Jazz",
      artist: "Luna Quartet",
      genre: "Jazz",
      rating: "9.32",
    },
    {
      album_title: "Electric Dreams",
      artist: "Neon Pulse",
      genre: "Electronic",
      rating: "8.12",
    },
    {
      album_title: "Acoustic Vibes",
      artist: "Guitar Heroes",
      genre: "Acoustic",
      rating: "6.99",
    },
    {
      album_title: "Rock Revolution",
      artist: "Thunderstrike",
      genre: "Rock",
      rating: "2.33",
    },
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <h1 className="text-4xl font-bold tracking-tight">Disc Rater</h1>
      <CurrentAlbum />
      <AlbumTable config={data} />
    </main>
  );
}
