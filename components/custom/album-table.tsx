"use client";

import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
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

export default function AlbumTable({
  config,
  rows,
}: {
  config: TableConfig;
  rows: AlbumData[] | any[] | null;
}) {
  const router = useRouter();
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
        {rows && rows.map((row: AlbumData) => (
            <TableRow
              key={row.ranking}
              onClick={() => router.push(`/album/${row.ranking}`)}
            >
              <TableCell>
                <div className="font-medium">{row.ranking}</div>
              </TableCell>
              <TableCell>
                <div className="font-medium">{row.album}</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {row.artist_name}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  {row.genres[0]}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                {row.average_rating}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
