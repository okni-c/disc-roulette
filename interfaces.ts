interface AlbumData {
  ranking: number;
  album: string;
  artist_name: string;
  release_year: number;
  descriptors: string[];
  average_rating: number;
  number_of_ratings: number;
  number_of_reviews: number;
  rated: boolean;
  previously_drawn: boolean;
  genres: string[];
  art_url: string;
}

interface TableConfig {
  label: string;
  description: string;
  headers: string[];
}

interface StyleType {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number | string;
  fontStyle?: string;
}
interface ImageProps {
  uri: string;
  offsetX?: number;
  offsetY?: number;
  sizeMultiplier?: number;
  landscape?: boolean;
}
interface WheelData {
  option?: string;
  image?: ImageProps;
  style?: StyleType;
  optionSize?: number;
}
