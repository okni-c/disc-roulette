"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AlbumData {
  album_title: string;
  artist: string;
  genre: string;
  rating: string;
}

interface AlbumTableConfig {
  label: string;
  description: string;
  headers: string[];
  rows: AlbumData[];
}

const config: AlbumTableConfig = {
  label: "Recent Reviews",
  description:
    "A list of recent album reviews with various genres and ratings.",
  headers: ["Album Title", "Artist", "Genre", "Rating"],
  rows: [
    {
      album_title: "Echoes of Time",
      artist: "The Silent Waves",
      genre: "Ambient",
      rating: "3.56",
    },
    {
      album_title: "Midnight Jazz",
      artist: "Luna Quartet",
      genre: "Jazz",
      rating: "9.32",
    },
    {
      album_title: "Electric Dreams",
      artist: "Neon Pulse",
      genre: "Electronic",
      rating: "8.12",
    },
    {
      album_title: "Acoustic Vibes",
      artist: "Guitar Heroes",
      genre: "Acoustic",
      rating: "6.99",
    },
    {
      album_title: "Rock Revolution",
      artist: "Thunderstrike",
      genre: "Rock",
      rating: "2.33",
    },
  ],
};

export default function AlbumTable() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>{config.label}</CardTitle>
        <CardDescription>{config.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {config &&
                config.headers.map((header, index) => (
                  <TableHead
                    key={index}
                    className={
                      index === config.headers.length - 1 ? "text-right" : ""
                    }
                  >
                    {header}
                  </TableHead>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {config &&
              config.rows.map((row) => (
                <TableRow>
                  <TableCell>
                    <div className="font-medium">{row.album_title}</div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {row.artist}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      {row.genre}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{row.rating}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
