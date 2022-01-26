export default function List({ merch, children }) {
  return (
    <div>
      <div className="responsive-container">
        <div className="grid">{merch.map((m) => children(m))}</div>
      </div>
    </div>
  );
}
