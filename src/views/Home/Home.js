import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Griaule PokeTest
        </p>
          <Link to='/pokedex'>Check the Pokedex</Link>
          <Link to='/choose-first-pokemon'>Choose your first Pokemon</Link>
      </header>
    </div>
  );
}

export default Home;
