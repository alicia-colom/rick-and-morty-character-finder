import '../stylesheets/CharacterDetail.scss';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import logoRM from '../images/Rick-Morty_logo.png';

const CharacterDetail = (props) => {
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
						<li>
							<Link to="/home">Back to search</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main className="character-detail">
				<h1>Character Detail</h1>
			</main>

			<Footer />
		</>
	);
};

export default CharacterDetail;
