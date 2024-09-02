import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  let { data, error } = await supabase.rpc("getrandomalbums");
  if (error) console.error(error);
  else console.log(data);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 3)}</pre>
    </div>
  );
}
