import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import api from '../services/api';

const App = () => {
	// Estados
	const [data, setData] = useState();
	const [search, setSearch] = useState();

	// Gestionar API
	// useEffect(() => {
	// 	api.getDataApi(search).then(
	// 		(data) => {
	// 			return console.log('Estoy en el 3º then', data);
	// 		},
	// 		[search]
	// 	);
	// });

	// Gestionar API (DE FORMA LARGA)
	useEffect((search) => {
		return fetch(
			'https://rickandmortyapi.com/documentation/#get-all-characters' + search
		)
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.then(
				(data) => {
					return console.log('Estoy en el 3º then', data);
				},
				[search]
			);
	});

	// Manejadora de input
	const handleInputValue = (inputValue) => {
		setSearch(inputValue);
		console.log(data, search);
	};

	return (
		<>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route exact path="/home">
					<CharacterList data={data} handleInputValue={handleInputValue} />
				</Route>
				<Route exact path="/info">
					{/* <Route exact path="/info:NOMBREdePERSONAJEporPROPS"> */}
					<CharacterDetail />
				</Route>
			</Switch>
		</>
	);
};

export default App;
