import AlbumTable from "@/components/custom/album-table";
import CurrentAlbum from "@/components/custom/current-album";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <h1 className="text-4xl font-bold tracking-tight">Disc Rater</h1>
      <CurrentAlbum />
      <AlbumTable />
    </main>
  );
}
