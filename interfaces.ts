type AlbumData = {
  album_title: string;
  artist: string;
  genre: string;
  rating: string;
};

interface TableConfig<T> {
  label: string;
  description: string;
  headers: string[];
  rows: T[];
}
