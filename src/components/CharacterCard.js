import '../stylesheets/CharacterCard.scss';
import deadIcon from '../images/death-icon.png';
import aliveIcon from '../images/alive-icon.png';
import unknownIcon from '../images/unknown-icon.png';

const CharacterCard = (props) => {

	const placedStatusIcon = () => {
		if (props.character.status === 'Dead') {
			return deadIcon;
		} else if (props.character.status === 'Alive') {
			return aliveIcon;
		} else {
			return unknownIcon;
		}
	};

	return (
		<article className="character-card">
			<img
				src={placedStatusIcon()}
				alt="Status icon"
				title="Status of the character"
				className="character-card__statusIcon"
			/>
			<div className="position">
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
			</div>
		</article>
	);
};

export default CharacterCard;
