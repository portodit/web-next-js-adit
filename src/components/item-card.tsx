import React from "react";

interface DogProps {
  name: string;
  imageUrl: string;
}

const ItemCard: React.FC<DogProps> = ({ name, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} width="400" height="400" />
      <h2>{name}</h2>
    </div>
  );
};

export default ItemCard;
