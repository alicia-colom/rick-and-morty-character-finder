import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
	return (
		<article className="character-card">
			<img
				src={props.character.image}
				alt={"Imagen de " + props.character.name}
				title={"Personaje: " + props.character.name}
				className="character-card__img"
			/>
			<h2 className="character-card__name">{props.character.name}</h2>
			<p className="character-card__paragraph">{props.character.species}</p>
			<Link
				to={`/info/${props.character.name}`}
				className="character-card__link"
			>
				Ver ficha completa
			</Link>
		</article>
	);
};

export default CharacterCard;
