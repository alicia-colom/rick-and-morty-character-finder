import '../stylesheets/CharacterList.scss';
import ReactDOM from 'react';
import Header from './Header';
import Loader from './Loader';
import Filters from './Filters';
import Footer from './Footer';
import NotResults from './NotResults';
import CharacterCard from './CharacterCard';
import imgNotResults from '../images/Rick-Morty_men-in-black.png';

const CharacterList = (props) => {
	// Revisión si hay resultados
	const returning = () => {
		// debugger;
		if (!props.resultList) {
			return props.children;
		} else {
			return <ul className="character-list__list">{characters}</ul>;
		}
	};

	// Gestión datos recibidos
	const characters = props.resultList.map((eachCharacter) => (
		<li key={eachCharacter.id}>
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
					<div className="character-list__form--container">
						<i
							className="fa fa-search character-list__form--icon"
							aria-hidden="true"
						></i>
						<input
							id="searchInput"
							type="text"
							className="character-list__form--input"
							title="Escribe el personaje que quieres buscar"
							placeholder="Escribe aquí..."
							onSubmit={handleSubmit}
							onChange={handleChange}
						/>
					</div>
				</form>
				<div>{returning()}</div>
			</main>

			<Footer />
		</>
	);
};

// ReactDOM.render(
// 	<div styling="info">
// 		<h2>There is nothing in here</h2>
// 		<img
// 			src={imgNotResults}
// 			alt="Rick and Morty keep driving"
// 			className="imgNotResults"
// 		/>
// 		<h2>Keep browsing</h2>
// 	</div>,
// 	document.getElementById('root')
// );

export default CharacterList;
