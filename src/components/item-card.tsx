import React from "react";

interface Pokemon {
  id: number;
  name: string;
  genus: string;
  description: string;
  imageUrl: string;
  types: string[];
}

interface Props {
  pokemon: Pokemon;
}

const ItemCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="card">
      <img className="card-img" src={pokemon.imageUrl} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>{pokemon.genus}</p>
      <p>{pokemon.description}</p>
      <div className="card-types">
        {pokemon.types.map((type, index) => (
          <span key={index} className="type-label">
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
