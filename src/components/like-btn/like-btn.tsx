import { useState, useEffect } from "react";
import { Joke } from "@/utils/types";

export default function LikeBtn({ joke }: { joke: Joke }) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const likedJokes = JSON.parse(localStorage.getItem("likedJokes") || "[]");
    setIsLiked(likedJokes.some((likedJoke: Joke) => likedJoke.id === joke.id));
  }, [joke]);

  const handleLike = () => {
    const likedJokes = JSON.parse(localStorage.getItem("likedJokes") || "[]");
    if (isLiked) {
      const updatedLikedJokes = likedJokes.filter(
        (likedJoke: Joke) => likedJoke.id !== joke.id
      );
      localStorage.setItem("likedJokes", JSON.stringify(updatedLikedJokes));
      setIsLiked(false);
    } else {
      likedJokes.push(joke);
      localStorage.setItem("likedJokes", JSON.stringify(likedJokes));
      setIsLiked(true);
    }
  };

  return (
    <button
      className={`${isLiked ? "btn-active" : "btn-primary"}`}
      onClick={handleLike}
    >
      {isLiked ? "Remove" : "Favorite"}
    </button>
  );
}
