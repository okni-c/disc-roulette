"use client";
import AlbumTable from "@/components/custom/album-table";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [albums, setAlbums] = useState<any>([]);

  const supabase = createClient();

  const pageSize = 15; // Number of items per page

  useEffect(() => {
    handlePageChange(1);
  });

  const handlePageChange = async (newPage: number) => {
    setPage(newPage);
    const { data } = await supabase
      .from("albums")
      .select("*")
      .range((newPage - 1) * pageSize, newPage * pageSize - 1);

    setAlbums(data);
  };

  const config: TableConfig = {
    label: "All Albums",
    description: "A list of the top 500 albums of all time.",
    headers: ["Rank", "Album Title", "Artist", "Genre", "Rating"],
  };

  return (
    <div className="px-10">
      <AlbumTable config={config} rows={albums} />
      <div className="flex gap-5 justify-start py-10 items-center">
        <Button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>
          Back
        </Button>
        <p className="font-bold">{page}</p>
        <Button onClick={() => handlePageChange(page + 1)}>Next</Button>
      </div>
    </div>
  );
}
