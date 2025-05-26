export default function Pill({ isCategory, text }) {
  return (
    <span
      className={
        isCategory
          ? "badge category-badge rounded-pill text-bg-primary ms-1"
          : "badge region-badge rounded-pill text-bg-success ms-1"
      }
    >
      {text}
    </span>
  );
}
