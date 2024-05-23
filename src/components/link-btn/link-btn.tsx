"use client";

import Link from "next/link";
import { useState } from "react";

export default function LinkBtn({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText = `${window.location.origin}/?id=${id}`;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Link
      className="btn-primary"
      href={`/?id=${id}`}
      onClick={handleCopyToClipboard}
    >
      Copy Link
    </Link>
  );
}
