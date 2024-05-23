import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import type { Metadata } from "next";

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
        <main className="flex min-h-screen flex-col items-center justify-between p-16">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-sky-900/25 dark:bg-sky-900/25 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-sky-900/25">
              <Image
                src="/smile.svg"
                alt="Smile Logo"
                width={24}
                height={24}
                priority
              />
              <p className="content-center ml-2">Random Dad Jokes</p>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
