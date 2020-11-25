import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Error from './Error';
import getDataApi from '../services/api';
import NotResults from './NotResults';

const App = () => {
	// Estados
	const [userSearch, setUserSearch] = useState('');
	const [resultList, setResultList] = useState([]);

	// Gestionar API
	useEffect(() => {
		getDataApi(userSearch).then((dataApi) => {
			setResultList(dataApi.results);
		});
	}, [userSearch]);

	// Manejadora de input
	const handleInputValue = (inputValue) => {
		setUserSearch(inputValue);
	};

	// Manejando CharacterDetail
	const renderCharacterDetail = (props) => {
		const characterRoute = props.match.params.characterName;
		const existCharacter = resultList.find((eachResult) => {
			return characterRoute === eachResult.name;
		});
		return existCharacter ? (
			<CharacterDetail detail={existCharacter} />
		) : (
			<Error />
		);
	};

	return (
		<>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route exact path="/home">
					<CharacterList
						resultList={resultList}
						handleInputValue={handleInputValue}
					/>
					);
				</Route>
				<Route
					exact
					path="/info/:characterName"
					component={renderCharacterDetail}
				/>
			</Switch>
		</>
	);
};

export default App;
