import { Badge } from "@/components/ui/badge";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function AlbumPage({
  params,
}: {
  params: { slug: string };
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: album, error } = await supabase
    .from("albums")
    .select("*")
    .eq("ranking", params.slug)
    .single<AlbumData>();

  return (
    <main className="w-full mt-10">
      {album && (
        <>
          <div className="px-10 flex justify-between">
            <img
              className="aspect-square h-44 rounded-lg"
              src={album.art_url}
            />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-6xl font-bold">{album.album}</h1>
                <p className="text-5xl font-extralight">{album.artist_name}</p>
              </div>
              <div className="flex gap-5">
                {album.genres.map((genre) => (
                  <Badge key={genre} className="text-xl text-white">
                    {genre}
                  </Badge>
                ))}

                <Badge className="text-xl text-white">
                  Released: {album.release_year}
                </Badge>
              </div>
            </div>
            <div className="flex flex-col text-end">
              <p className="text-6xl font-black text-[#81FF95]">
                {album.average_rating}
              </p>
              <p className="text-xl">User Score</p>
            </div>
          </div>
          <div className="pt-10 px-10">
            {album.descriptors.map((desc) => (
              <Badge key={desc} className=" text-white">
                {desc}
              </Badge>
            ))}
            {album.rated ? <p>Has been rated.</p> : <p>Has not been rated.</p>}
            <Badge className=" text-white">
              Ratings: {album.number_of_ratings}
            </Badge>
            <Badge className=" text-white">
              Reviews: {album.number_of_reviews}
            </Badge>
          </div>
        </>
      )}

      {error && <p>This album does not exist.</p>}
    </main>
  );
}
