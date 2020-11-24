import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import getDataApi from '../services/api';

const App = () => {
	// Estados
	// const [data, setData] = useState();
	const [userSearch, setUserSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	// Gestionar API
	useEffect(() => {
		getDataApi(userSearch).then((dataApi) => {
			setSearchResults(dataApi.results);
			console.log(dataApi.info);
		});
	}, [userSearch]);

	// Manejadora de input
	const handleInputValue = (inputValue) => {
		setUserSearch(inputValue);
	};

	return (
		<>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route exact path="/home">
					<CharacterList
						searchResults={searchResults}
						handleInputValue={handleInputValue}
					/>
				</Route>
				<Route exact path="/info/:characterName">
					<CharacterDetail />
				</Route>
			</Switch>
		</>
	);
};

export default App;
