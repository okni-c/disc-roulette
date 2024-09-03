import WheelAlbums from "@/components/custom/wheel-of-albums";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: randomAlbums, error } = await supabase.rpc("get_random_albums");
  if (randomAlbums) {

    const wheelData: WheelData = randomAlbums.map((album: AlbumData) => {
      return {option: `${album.album}`, image: {uri: album.art_url}}
    })

    console.log("Wheeldata", wheelData)

    const arrOfRankings = randomAlbums.map((album: AlbumData) => {
      return album.ranking;
    });

    console.log(arrOfRankings);

    const { data: rpctest, error: rpcerror } = await supabase.rpc(
      "update_previously_drawn",
      { ids: arrOfRankings }
    );

    rpctest && console.log("YES", rpctest);
    rpcerror && console.log("NO", rpcerror);

    return (
      <div>
        <WheelAlbums wheelData={wheelData} />
      </div>
    );
  } else {
    return <p>No Wheel data bro.</p>
  }
}
