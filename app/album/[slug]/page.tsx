export default function AlbumPage({ params }: { params: { slug: string } }) {
    return (
        <div className="flex">
            <div>
                <h1>Vertigo</h1>
                <p></p>
                <div className="flex">
                    <p>Genre</p>
                    <p>Release year</p>
                </div>
            </div>
            <div className="">
                <p className="text-3xl">8.44</p>
                <p>User Score</p>
            </div>
        </div>
    )
  }