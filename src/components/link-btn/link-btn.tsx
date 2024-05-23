"use client";

import Link from "next/link";

export default function LinkBtn({ id }: { id: string }) {
  return (
    <Link className="btn-primary" href={`/?id=${id}`}>
      Get Link
    </Link>
  );
}
