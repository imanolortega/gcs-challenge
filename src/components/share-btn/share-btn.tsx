import Btn from "../btn/btn";

export default function ShareBtn({ url }: { url: string }) {
  const shareOnX = () => {
    const tweetText = `Check this funny joke ${encodeURIComponent(url)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterShareUrl, "_blank");
  };

  return <Btn className="btn-primary" onClick={shareOnX} iconType="share" iconSize={22} />;
}
