//Este arquivo é a página principal que irá buscar e exibir os dados dos super-heróis.
import { useEffect, useState } from 'react';

const ACCESS_TOKEN = "4995282617154105";
const BASE_URL = "https://superheroapi.com/api.php/" + ACCESS_TOKEN + "/";
const heroesIds = [200, 465]; //IDs dos heróis que queremos buscar

const Home = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const fetchedHeroes = await Promise.all(
        heroesIds.map(async (id) => {
          const response = await fetch(`${BASE_URL}${id}`);
          const data = await response.json();
          return data;
        })
      );
      setHeroes(fetchedHeroes);
    };

    fetchHeroes();
  }, []);

  return (
    <div id="heroes">
      {heroes.map(hero => (
        <article key={hero.id}>
          <img src={hero.image.url} alt={hero.name} />
          <h1>{hero.name}</h1>
          <p>Intelligence: <span style={{ width: `${hero.powerstats.intelligence}%`, backgroundColor: '#F9B32F' }}></span></p>
          <p>Strength: <span style={{ width: `${hero.powerstats.strength}%`, backgroundColor: '#FF7C6C' }}></span></p>
        </article>
      ))}
    </div>
  );
};
export default Home;