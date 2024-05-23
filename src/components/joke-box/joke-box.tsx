"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import LikeBtn from "../like-btn/like-btn";
import LinkBtn from "../link-btn/link-btn";
import ShareBtn from "../share-btn/share-btn";
import { Joke } from "@/utils/types";
import Btn from "../btn/btn";

async function getRandomJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getJokeById(searchId: string) {
  const res = await fetch(`https://icanhazdadjoke.com/j/${searchId}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

function JokeComponent() {
  const searchParams = useSearchParams();
  const searchId = searchParams.get("id");
  const router = useRouter();

  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      let result;
      if (searchId) {
        result = await getJokeById(searchId);
      } else {
        result = await getRandomJoke();
      }
      setJoke(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch joke");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, [searchId]);

  const handleRefresh = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getRandomJoke();
      setJoke(result);
      router.replace("/");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch joke");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const shareOnXURL = `${process.env.NEXT_PUBLIC_FRONTEND_URL}?id=${joke?.id}`;

  return (
    <div>
      {joke && (
        <>
          <div className="gradient-main-content max-w-2xl flex justify-center">
            <p className="text-xl text-center mb-10">{joke.joke}</p>
          </div>
          <div className="grid lg:grid-cols-4 min-w-xl gap-3">
            <Btn onClick={handleRefresh} />
            <LikeBtn joke={joke} />
            <LinkBtn id={joke.id} />
            <ShareBtn url={shareOnXURL} />
          </div>
        </>
      )}
    </div>
  );
}

export default function JokeBox() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JokeComponent />
    </Suspense>
  );
}
