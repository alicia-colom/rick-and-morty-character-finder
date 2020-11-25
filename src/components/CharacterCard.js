import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
	return (
		<article className="character-card">
			<img
				src={props.character.image}
				alt={'Here will apperas the face of ' + props.character.name}
				title={'This is ' + props.character.name}
				className="character-card__img"
			/>
			<div className="character-card__info">
				<h2 className="character-card__info--name">{props.character.name}</h2>
				<p className="character-card__info--paragraph">
					{props.character.species}
				</p>
				<Link
					to={`/info/${props.character.name}`}
					className="character-card__info--link"
				>
					+ info
				</Link>
			</div>
		</article>
	);
};

export default CharacterCard;
