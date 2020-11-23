import '../stylesheets/CharacterList.scss';
// import { useState } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import Filters from './Filters';
import Footer from './Footer';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
	const data = [];
	const character = data.map((eachCharacter) => (
		<li key={eachCharacter.id} className="character-list__list--item">
			<CharacterCard />
		</li>
	));

	return (
		<>
			<Header />

			<main className="character-list">
				<form action="" className="character-list__form">
					<label htmlFor="searchInput" className="character-list__form--label">
						¿Qué personaje buscas?
					</label>
					<input
						id="searchInput"
						type="text"
						className="character-list__form--input"
						placeholder="Escribe aquí..."
					/>
				</form>
				<Loader />
				<ul className="character-list__list">{character}</ul>
			</main>

			<Footer />
		</>
	);
};

export default CharacterList;
