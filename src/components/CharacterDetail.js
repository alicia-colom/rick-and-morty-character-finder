import '../stylesheets/CharacterDetail.scss';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const CharacterDetail = (props) => {
	const allEpisodes = props.detail.episode.map((eachEpisode, i) => {
		return (
			<option className="detail__episodes--item" value={eachEpisode}>
				Episode #{i}
			</option>
		);
	});

	return (
		<>
			<Header />

			<main className="character-detail">
				<Link to="/home" className="character-detail__link">
					Back to search
				</Link>
				<div className="character-detail__container">
					<img
						src={props.detail.image}
						alt=""
						className="character-detail__container--img"
					/>
					<div className="detail">
						<h2 className="detail__name">{props.detail.name}</h2>
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
								<b>Episodes: </b>
							</label>
							<select
								className="detail__episodes--list"
								id="episodes"
								name="episodes"
							>
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
