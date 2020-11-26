import '../stylesheets/CharacterCard.scss';

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
				<small className="character-card__info--small">+ info</small>
			</div>
		</article>
	);
};

export default CharacterCard;
