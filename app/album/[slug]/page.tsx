import AlbumTable from "@/components/custom/album-table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

const config: TableConfig = {
  label: "Individual User Scores",
  description: "A list of recent reviews from real users for this album.",
  headers: ["Username", "Comments", "Genre Bias", "Rating"],
};

export default async function AlbumPage({ params }: { params: { slug: string } }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: album } = await supabase
    .from('albums')
    .select('*')
    .eq('ranking', params.slug)
    .single();

  return (
    <main className="w-full mt-10">
      <div className="px-10 flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl font-bold">{album.album}</h1>
            <p className="text-5xl font-extralight">{album.artist_name}</p>
          </div>
          <div className="flex gap-5">
            {album.genres.map((genre: string[]) => (
              <Badge className="text-xl text-white">{genre}</Badge>
            ))}
            
            <Badge className="text-xl text-white">Released: {album.release_year}</Badge>
          </div>
        </div>
        <div className="flex flex-col text-end">
          <p className="text-6xl font-black text-[#81FF95]">{album.average_rating}</p>
          <p className="text-xl">User Score</p>
        </div>
      </div>
      {/* <div className="pt-10 px-10">
        <AlbumTable config={config} rows={rows} />
      </div> */}
      <pre>{JSON.stringify(album, null, 3)}</pre>
    </main>
  );
}
