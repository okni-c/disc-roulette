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
import { Input } from "../ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function AlbumTable({
  config,
  rows,
  handleSearch,
}: {
  config: TableConfig;
  rows: AlbumData[] | any[] | null;
  handleSearch?: any;
}) {
  const router = useRouter();
  const maxCharactersPerCell = 50;

  return (
    <Card>
      <CardHeader className="px-7">
        <div className="flex">
          <div className="flex flex-col gap-3 flex-grow">
            <CardTitle>{config.label}</CardTitle>
            <CardDescription>{config.description}</CardDescription>
          </div>
          {handleSearch && (
            <Input
              onChange={handleSearch}
              type="Search"
              placeholder="Search"
              className="w-auto"
            />
          )}
        </div>
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
              rows.map((row: AlbumData) => (
                <TableRow
                  className="cursor-pointer"
                  key={row.ranking}
                  onClick={() => router.push(`/album/${row.ranking}`)}
                >
                  <TableCell>
                    <div className="font-medium">{row.ranking}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">
                      {row.album.length > maxCharactersPerCell ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <p className="truncate max-w-[300px]">{row.album}</p>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="max-w-96">
                              {row.album}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        row.album
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {row.artist_name.length > maxCharactersPerCell ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <p className="truncate max-w-[300px]">
                              {row.artist_name}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-96">
                            {row.artist_name}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      row.artist_name
                    )}
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
