export default function Button({
  children,
  className = "btn btn-outline-dark",
  ...whatever
}) {
  return (
    <span {...whatever}  className={`${className}`}>
      {children}
    </span>
  );
}
