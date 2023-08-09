import "../styles/cards.css";

export default function Card({ title, image, onClick }) {
  return (
    <div className="card-container">
      <img src={image} alt="" onClick={() => onClick(title)} />
      <div>
        <p style={{ fontWeight: "bold" }}>{title}</p>
      </div>
    </div>
  );
}
