import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [pokelist, setPokeList] = useState([]);
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const irAPokemon = () => {
    console.log(`pokemon seleccionado: ${pokemon}`);
    navigate(`/pokemon/${pokemon}`);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      const data = await response.json();
      setPokeList(data);
      setLoading(false);
    };

    fetchPokemon();
  }, []);

  const handleSelectChange = (event) => {
    setPokemon(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container
      className="text-center"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3 className="pt-5">Selecciona un Pokémon</h3>
      <select className="form-select" onChange={handleSelectChange}>
        <option value="">Elige un Pokémon</option>
        {pokelist.results.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={irAPokemon} className="mt-3" variant="dark">
        Buscar
      </button>
    </Container>
  );
};
export default Pokemones;
