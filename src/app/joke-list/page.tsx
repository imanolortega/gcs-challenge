import LikedJokes from "@/components/liked-jokes/liked-jokes";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <section className="flex flex-col gap-10">
        <div className="max-w-2xl flex justify-center">
          <LikedJokes />
        </div>
      </section>
      <section className="mb-32 grid text-center">
        <Link href="/" className="btn-primary">
          <p className="text-xl font-semibold">
            Return to home{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </p>
        </Link>
      </section>
    </>
  );
}