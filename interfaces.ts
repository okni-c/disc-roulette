interface AlbumData {
  ranking: number;
  album: string;
  artist_name: string;
  release_year: number;
  is_rated: boolean;
  descriptors: string[];
  average_rating: number;
  number_of_ratings: number;
  number_of_reviews: number;
  rated: boolean;
  previously_drawn: boolean;
  genres: string[];
}


interface TableConfig {
  label: string;
  description: string;
  headers: string[];
}
