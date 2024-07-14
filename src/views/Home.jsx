import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const Home = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
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
    <Container className="text-center">
      <h1 className="pt-5">Bienvenido, maestro pokémon!</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{ width: "20%" }}
      />
    </Container>
  );
};
export default Home;
