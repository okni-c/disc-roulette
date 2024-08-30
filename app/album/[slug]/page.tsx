import AlbumTable from "@/components/custom/album-table";
import { Badge } from "@/components/ui/badge";

export default function AlbumPage({ params }: { params: { slug: string } }) {
    return (
        <main className="w-full">
            <div className="px-20 flex justify-evenly">
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
                    <AlbumTable />
            </div>
        </main>
    )
  }