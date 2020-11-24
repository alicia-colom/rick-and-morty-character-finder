import '../stylesheets/CharacterList.scss';
// import { useState } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import Filters from './Filters';
import Footer from './Footer';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
	// // Gestión datos recibidos
	const characters = props.resultList.map((eachCharacter) => (
		<li key={eachCharacter.id} className="character-list__list--item">
			<CharacterCard character={eachCharacter} />
		</li>
	));

	// Evitar submiten input
	const handleSubmit = (ev) => {
		ev.preventDefault();
	};

	// Manejando input
	const handleChange = (ev) => {
		props.handleInputValue(ev.currentTarget.value);
	};

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
						onSubmit={handleSubmit}
						onChange={handleChange}
					/>
				</form>
				<Loader />
				<ul className="character-list__list">{characters}</ul>
			</main>

			<Footer />
		</>
	);
};

export default CharacterList;
