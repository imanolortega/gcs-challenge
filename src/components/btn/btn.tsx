import Icon from "../icons/icon";

export default function Btn({
  className,
  onClick,
  iconType,
  iconSize = 32,
}: {
  className: string;
  onClick: () => void;
  iconType: string;
  iconSize?: number;
}) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      <Icon type={iconType} size={iconSize} />
    </button>
  );
}
