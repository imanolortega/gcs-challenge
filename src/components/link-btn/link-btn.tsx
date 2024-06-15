"use client";

import Link from "next/link";
import Icon from "../icons/icon";

export default function LinkBtn({ id }: { id: string }) {
  const handleCopyToClipboard = async () => {
    const textToCopy = `${window.location.origin}/?id=${id}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Link
      className="btn btn-primary"
      href={`/?id=${id}`}
      onClick={handleCopyToClipboard}
    >
      <Icon type="copy" />
    </Link>
  );
}
