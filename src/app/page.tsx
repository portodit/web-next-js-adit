import React from "react";
import ItemCard from "../components/item-card";

const PokemonData: {
  id: number;
  name: string;
  genus: string;
  description: string;
  imageUrl: string;
  types: string[];
}[] = [
  {
    id: 1,
    name: "Bulbasaur",
    genus: "Seed Pokémon",
    description:
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
    imageUrl:
      "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/1.webp",
    types: ["Grass", "Poison"],
  },
  {
    id: 2,
    name: "Ivysaur",
    genus: "Seed Pokémon",
    description:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    imageUrl:
      "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/2.webp",
    types: ["Grass", "Poison"],
  },
  {
    id: 3,
    name: "Venusaur",
    genus: "Seed Pokémon",
    description:
      "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    imageUrl:
      "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/3.webp",
    types: ["Grass", "Poison"],
  },
  {
    id: 4,
    name: "Charmander",
    genus: "Lizard Pokémon",
    description:
      "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
    imageUrl:
      "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/4.webp",
    types: ["Fire"],
  },
  {
    id: 5,
    name: "Charmeleon",
    genus: "Flame Pokémon",
    description:
      "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
    imageUrl:
      "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/5.webp",
    types: ["Fire"],
  },
  {
    id: 6,
    name: "Charizard",
    genus: "Flame Pokémon",
    description:
      "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
    imageUrl:
      "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/6.webp",
    types: ["Fire", "Flying"],
  },
  {
    id: 7,
    name: "Squirtle",
    genus: "Tiny Turtle Pokémon",
    description:
      "Shoots water at prey while in the water. Withdraws into its shell when in danger.",
    imageUrl:
      "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/7.webp",
    types: ["Water"],
  },
  {
    id: 8,
    name: "Wartortle",
    genus: "Turtle Pokémon",
    description:
      "When tapped, this POKéMON will pull in its head, but its tail will still stick out a little bit.",
    imageUrl:
      "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/8.webp",
    types: ["Water"],
  },
  {
    id: 9,
    name: "Blastoise",
    genus: "Shellfish Pokémon",
    description:
      "It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.",
    imageUrl:
      "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/9.webp",
    types: ["Water"],
  },
  {
    id: 10,
    name: "Caterpie",
    genus: "Worm Pokémon",
    description:
      "It releases a stench from its red antenna to repel enemies. It grows by molting repeatedly.",
    imageUrl:
      "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/10.webp",
    types: ["Bug"],
  },
];

const Pages: React.FC = () => {
  return (
    <div>
      <h1>Daftar Lengkap Pokémon Go</h1>
      <div className="developer-info">
        <table>
          <tbody>
            <tr>
              <td className="label" style={{ color: 'red' }}>Nama Lengkap:</td>
              <td>I Putu Adhitya Pratama Mangku Purnama</td>
            </tr>
            <tr>
              <td className="label" style={{ color: 'green' }}>Status:</td>
              <td>Mahasiswa Sistem Informasi ITS</td>
            </tr>
            <tr>
              <td className="label" style={{ color: 'blue' }}>Kelas:</td>
              <td>Penggunaan NextJS dalam pembuatan website modern</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid-container">
        {PokemonData.map((pokemon) => (
          <ItemCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pages;
