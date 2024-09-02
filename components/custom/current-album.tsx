"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function CurrentAlbum() {
  return (
    <Link href={`/album/1`}>
      <Card className="sm:col-span-2">
        <CardHeader className="pb-3">
          <p>Current album:</p>
          <CardTitle className="text-3xl">Vertigo</CardTitle>
          <CardDescription className="max-w-lg text-balance text-xl">
            Groove Armada
          </CardDescription>
        </CardHeader>
        <CardFooter></CardFooter>
      </Card>
    </Link>
  );
}
