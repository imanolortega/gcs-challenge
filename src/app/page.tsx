import { Metadata } from "next";
import JokeBox from "@/components/joke-box/joke-box";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Random Dad Jokes | Home",
};

export default async function Home() {
  return (
    <>
      <section className="flex flex-col gap-10 mb-6 lg:mb-0">
        <JokeBox />
      </section>
      <section className="mb-32 grid text-center">
        <Link href="/joke-list" className="btn-primary">
          <p className="mb-3 text-xl font-semibold">
            Favorite jokes{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </p>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            A list of your favorite jokes.
          </p>
        </Link>
      </section>
    </>
  );
}
