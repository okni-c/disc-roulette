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

export default function AlbumTable({
  config, rows
}: {
  config: TableConfig;
  rows: any[] | null
}) {
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
            {rows &&
              rows.map((row) => (
                <TableRow key={row.album_title}>
                  <TableCell>
                    <div className="font-medium">{row.album_title}</div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {row.artist}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      {row.release_year}
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
