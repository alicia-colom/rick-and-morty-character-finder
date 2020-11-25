import '../stylesheets/CharacterList.scss';
import Header from './Header';
import Loader from './Loader';
import Filters from './Filters';
import Footer from './Footer';
import CharacterCard from './CharacterCard';
// import ReactDOM from 'react';
import NotResults from './NotResults';
import imgNotResults from '../images/Rick-Morty_men-in-black.png';

const CharacterList = (props) => {
// 	// No result function
// 	const returning = () => {
// 		// debugger;
// 		 (props.resultList.length !== 0) ? (<ul className="character-list__list">{characters}</ul>)
// 		: 
// 		(<NotResults/>)
// 		}
// 	};

	// Render character data
	const characters = props.resultList.map((eachCharacter) => (
		<li key={eachCharacter.id}>
			<CharacterCard character={eachCharacter} />
		</li>
	));

	// Prevent submit in input
	const handleSubmit = (ev) => {
		ev.preventDefault();
	};

	// Handle input
	const handleChange = (ev) => {
		props.handleInputValue(ev.currentTarget.value);
	};

	return (
		<>
			<Header />

			<main className="character-list">
				<form action="" className="character-list__form">
					<legend
						htmlFor="searchInput"
						className="character-list__form--legend"
					>
						Who are you looking for?
					</legend>
					<div className="character-list__form--container">
						<i
							className="fa fa-search character-list__form--icon"
							aria-hidden="true"
						></i>
						<input
							id="searchInput"
							type="text"
							className="character-list__form--input"
							title="Enter here the name of the character you are looking for"
							placeholder="Write right here..."
							onSubmit={handleSubmit}
							onChange={handleChange}
						/>
					</div>
				</form>
				<Filters resultList={props.resultList} />

				{(props.resultList.length !== 0) 
				? 
				(<ul className="character-list__list">{characters}</ul>) 
				: 
				(<NotResults/>)}
			</main>

			<Footer />
		</>
	);
};

export default CharacterList;
