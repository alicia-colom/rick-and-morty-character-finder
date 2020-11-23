import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
	return (
		<>
			<article className="character-card">
				<h1>Character Card</h1>
				<Link to="/info">Enlace a detalles del Personaje</Link>
			</article>
		</>
	);
};

export default CharacterCard;
