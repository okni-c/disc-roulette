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

const rows: any = [
  {
    album_title: "dyatsinko",
    artist: "I loved this.",
    release_year: "Ambient",
    rating: "3.56",
  },
  {
    album_title: "nullmxwll",
    artist: "Strange. Just Strange.",
    release_year: "Jazz",
    rating: "2.32",
  },
  {
    album_title: "PeterParker",
    artist: "I shoot webs.",
    release_year: "Electronic",
    rating: "8.12",
  }
];

export default async function AlbumPage({ params }: { params: { slug: string } }) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: album } = await supabase
    .from('albums')
    .select('*')
    .eq('id', params.slug); // Filter by id column

  return (
    <main className="w-full mt-10">
      <div className="px-10 flex justify-between">
        <Image
          className="rounded-lg aspect-square"
          src={"/Groove Armada Vertigo.webp"}
          alt={""}
          width={250}
          height={250}
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl font-bold">{JSON.stringify(album)}</h1>
            <p className="text-5xl font-extralight">Groove Armada</p>
          </div>
          <div className="flex gap-5">
            <Badge className="text-xl text-white">Electronic</Badge>
            <Badge className="text-xl text-white">Released: 2001</Badge>
          </div>
        </div>
        <div className="flex flex-col text-end">
          <p className="text-6xl font-black text-[#81FF95]">8.44</p>
          <p className="text-xl">User Score</p>
        </div>
      </div>
      <div className="pt-10 px-10">
        <AlbumTable config={config} rows={rows} />
      </div>
    </main>
  );
}
