"use client";
import toast, { Toaster } from "react-hot-toast";
import Icon from "../icons/icon";

export default function LinkBtn({ id }: { id: string }) {
  const handleCopyToClipboard = async (event: React.MouseEvent) => {
    event.preventDefault();
    const textToCopy = `${window.location.origin}/?id=${id}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      toast("Link copied!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      className="btn btn-primary"
      onClick={handleCopyToClipboard}
    >
      <Icon type="copy" />
      <Toaster
        toastOptions={{
          style: {
            background: "#111",
            color: "#fafafa",
            border: "#3b88e9",
            borderWidth: '1px'
          },
        }}
      />
    </button>
  );
}
