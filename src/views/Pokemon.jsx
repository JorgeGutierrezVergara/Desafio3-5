import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
      setLoading(false);
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          border: "1px solid grey",
          padding: "10px",
          margin: "25px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "45%",
          marginTop: "50px",
        }}
      >
        <div>
          <h1>{id}</h1>
          <img
            variant="top"
            src={pokemon.sprites.front_default}
            style={{ width: "50vh" }}
          />
        </div>
        <div style={{ textAlign: "start" }}>
          <ul>
            <li>hp: {pokemon.stats[0].base_stat}</li>
            <li>attack: {pokemon.stats[1].base_stat}</li>
            <li>defense: {pokemon.stats[2].base_stat}</li>
            <li>special-attack: {pokemon.stats[3].base_stat}</li>
            <li>special-defense: {pokemon.stats[4].base_stat}</li>
            <li>speed: {pokemon.stats[5].base_stat}</li>
            {/* <li>{pokemon.types[1].type.name}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
