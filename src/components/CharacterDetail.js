import '../stylesheets/CharacterDetail.scss';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import deadIcon from '../images/death-icon.png';
import aliveIcon from '../images/yay-icon.svg';

const CharacterDetail = (props) => {
	// Replace episodenumber instead url
	const allEpisodes = props.detail.episode.map((eachEpisode, i) => {
		const newString = eachEpisode.replace(
			'https://rickandmortyapi.com/api/episode/',
			''
		);
		return (
			<option key={i} value={eachEpisode}>
				E{newString}
			</option>
		);
	});

	return (
		<>
			<Header />

			<main className="character-detail">
				<Link
					to="/home"
					className="character-detail__link"
					title="Back to your search"
				>
					Back to search
				</Link>
				<div className="character-detail__container">
					<img
						src={props.detail.image}
						alt={'Image of ' + props.detail.name}
						title={'This is ' + props.detail.name}
						className="character-detail__container--img"
					/>
					<div className="character-detail__container--info detail">
						<div className="character-detail__container--header">
							<h2 className="detail__name">{props.detail.name}</h2>
							<img
								src={props.detail.status === 'Dead' ? deadIcon : aliveIcon}
								alt="Status icon"
								title="Status of the character"
								className="detail__statusIcon"
							/>
						</div>{' '}
						<p>
							<b>Status: </b>
							{props.detail.status}
						</p>
						<p>
							<b>Specie: </b>
							{props.detail.species}
						</p>
						<p>
							<b>Gender: </b>
							{props.detail.gender}
						</p>
						<p>
							<b>Origin: </b>
							{props.detail.origin.name}
						</p>
						<div className="detail__episodes">
							<label htmlFor="episodes">
								<b>Appears in </b>
								{props.detail.episode.length === 41
									? 'all'
									: props.detail.episode.length}{' '}
								episodes
							</label>
							<select
								className="detail__episodes--list"
								id="episodes"
								name="episodes"
								title="Number of episodes where character appears"
							>
								<option
									value="List"
								>
									List
								</option>
								{allEpisodes}
							</select>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default CharacterDetail;
