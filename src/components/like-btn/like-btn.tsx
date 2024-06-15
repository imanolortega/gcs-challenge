import { Joke } from "@/utils/types";
import { useState, useEffect } from "react";
import Icon from "../icons/icon";
import Btn from "../btn/btn";

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
    <Btn
      className={`${isLiked ? "btn-active" : "btn-primary"}`}
      onClick={handleLike}
      iconType="favorite"
      iconSize={30}
    />
  );
}
