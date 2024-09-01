import AlbumTable from "@/components/custom/album-table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const config: TableConfig<AlbumData> = {
  label: "Individual User Scores",
  description:
    "A list of recent reviews from real users for this album.",
  headers: ["Username", "Rating", "Genre Bias", "Rating"],
  rows: [
    {
      album_title: "dyatsinko",
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

export default function AlbumPage({ params }: { params: { slug: string } }) {
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
            <h1 className="text-6xl font-bold">Vertigo Remastered</h1>
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
        <AlbumTable config={config} />
      </div>
    </main>
  );
}
