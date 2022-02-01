export default function List({ merchs, children }) {
  return (
    <div>
      <div className="responsive-container mb-4">
        <div className="grid">{merchs.map((m) => children(m))}</div>
      </div>
    </div>
  );
}
