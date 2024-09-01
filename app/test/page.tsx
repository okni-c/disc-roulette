
import AlbumTable from '@/components/custom/album-table';
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {data: rows} = await supabase.from('albums').select('*');

  const config: TableConfig = {
    label: "All Albums rated",
    description:
      "A list of recent reviews from real users for this album.",
    headers: ["Title", "Artist", "Release year", "Rating"]
  };

  return (
    <div>
      <AlbumTable config={config} rows={rows} />
    </div>
  )
}
