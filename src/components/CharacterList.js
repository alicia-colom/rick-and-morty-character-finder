import '../stylesheets/CharacterList.scss';
// import { useState } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import Footer from './Footer';
import Loader from './Loader';
import CharacterCard from './CharacterCard';
import logoRM from '../images/Rick-Morty_logo.png';

const CharacterList = (props) => {
	// const [data, setData] = useState();

	return (
		<>
			<header className="header">
				<Link to="/home">
					<img
						className="header__img"
						src={logoRM}
						alt="Logo Rick y Morty"
						title="Ir al buscador de Rick y Morty"
					/>
				</Link>
				<nav>
					<ul>
						<li>
							<Link to="/">Start again</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main className="character-list">
				<h1>Character List</h1>
				<Filters />
				<Loader />
				<ul>
					<CharacterCard />
					{/* {List.map((eachCharacter, index) => (
						<li key={eachCharacter.id}>
							<Link to={'/CharacterCard/' + eachCharacter.name}></Link>
						</li>
					))} */}
				</ul>
			</main>

			<Footer />
		</>
	);
};

export default CharacterList;
