"use client";
import { useState, useEffect } from "react";
import { Joke } from "@/utils/types";
import Icon from "../icons/icon";

const fetchLikedJokes = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("likedJokes") || "[]");
  }
  return [];
};

const LikesListContent = () => {
  const [likedJokes, setLikedJokes] = useState<Joke[]>(fetchLikedJokes());
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const handleStorageChange = () => {
      setLikedJokes(fetchLikedJokes());
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleRemoveJoke = (id: string) => {
    const updatedLikedJokes = likedJokes.filter((joke) => joke.id !== id);
    if (typeof window !== "undefined") {
      localStorage.setItem("likedJokes", JSON.stringify(updatedLikedJokes));
    }
    setLikedJokes(updatedLikedJokes);
  };

  const filteredJokes = likedJokes.filter((joke) =>
    joke.joke.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="z-100">
      <h2 className="text-2xl font-semibold mt-10 mb-6 text-center">
        Favorite Jokes
      </h2>
      <input
        type="text"
        placeholder="Search jokes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block mx-auto mb-6 px-4 py-2 rounded-md border border-gray-300 text-black"
      />
      {likedJokes.length === 0 && !searchTerm ? (
        <p className="text-center">There are no favorite jokes</p>
      ) : filteredJokes.length > 0 ? (
        <ul className="">
          {filteredJokes.map((joke: Joke) => (
            <li className="mb-6 grid grid-cols-[90%_10%] p-2" key={joke.id}>
              <div className="flex content-center pt-0 lg:pt-1">
                <p>{joke.joke}</p>
              </div>
              <div>
                <button
                  className="ml-4 btn-secondary flex content-center justify-center"
                  onClick={() => handleRemoveJoke(joke.id)}
                >
                  <Icon type="remove" size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">There are no jokes matching your search</p>
      )}
    </div>
  );
};

export default function LikedJokes() {
  return <LikesListContent />;
}
