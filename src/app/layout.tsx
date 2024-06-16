import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Dad Jokes",
  description: "Greencode challenge by Imanol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>😂</text></svg>"
      />

      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-16">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex mb-6 lg:mb-0">
            <Link href="/" className="logo-link">
              <Image
                src="/smile.svg"
                alt="Smile Logo"
                width={24}
                height={24}
                priority
              />
              <p className="content-center ml-2">Random Dad Jokes</p>
            </Link>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
