import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
	return (
		<>
			<article className="character-card">
				<img src="" alt="" className="character-card__img" />
				<h2 className="character-card__name">Nombre personaje</h2>
				<p className="character-card__paragraph">Especie</p>
				<Link to="/info" className="character-card__link">
					Ficha completa
				</Link>
			</article>
		</>
	);
};

export default CharacterCard;
