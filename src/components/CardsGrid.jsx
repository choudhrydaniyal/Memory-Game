import Card from "./Cards";

export default function CardsGrid({ characters, charactersNames, onClick }) {
  return (
    <div className="cards">
      {charactersNames.map((character, index) => {
        return (
          <Card
            key={index}
            title={character}
            image={characters[character]}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}
