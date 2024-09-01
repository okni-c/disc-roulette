import AlbumTable from "@/components/custom/album-table";
import CurrentAlbum from "@/components/custom/current-album";
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
const config: TableConfig = {
  label: "Recent Reviews",
  description:
    "A list of recent album reviews with various genres and ratings.",
  headers: ["Album Title", "Artist", "Genre", "Rating"]
};

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {data: rows} = await supabase.from('albums').select('*');

  return (
    <main className="flex flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <h1 className="text-4xl font-bold tracking-tight">Disc Rater</h1>
      <CurrentAlbum />
      <AlbumTable config={config} rows={rows} />
    </main>
  );
}
