import '../stylesheets/CharacterDetail.scss';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const CharacterDetail = (props) => {
	console.log(props.resultado);

	return (
		<>
			<Header />

			<main className="character-detail">
				<Link to="/home" className="character-detail__link">
					Back to search
				</Link>
				<div className="character-detail__container">
					<img src="" alt="" className="character-detail__container--img" />
					<div className="character-detail__container--info">
						<h2 className="detail-name">Nombre personaje</h2>
						<p>
							<b>Estado: </b>
							{}
						</p>
						<p>
							<b>Especie: </b>
							{}
						</p>
						<p>
							<b>Origen: </b>
							{}
						</p>
						<p>
							<b>Episodios: </b>
							{}
						</p>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default CharacterDetail;
