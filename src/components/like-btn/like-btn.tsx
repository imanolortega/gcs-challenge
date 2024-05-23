"use client";

export default function LikeBtn({ joke }: { joke: Joke }) {
  const handleLike = () => {
    const likedJokes = JSON.parse(localStorage.getItem("likedJokes") || "[]");
    if (!likedJokes.some((likedJoke: Joke) => likedJoke.id === joke.id)) {
      likedJokes.push(joke);
      localStorage.setItem("likedJokes", JSON.stringify(likedJokes));
    }
  };

  return (
    <button className="btn-primary" onClick={handleLike}>
      Like
    </button>
  );
}

export type Joke = {
  id: string;
  joke: string;
  status: number;
};
