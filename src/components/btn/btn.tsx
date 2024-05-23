export default function Btn({ onClick }: { onClick: () => void }) {
  return (
    <button className="btn-primary" onClick={onClick}>
      Refresh
    </button>
  );
}
