import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Error from './Error';
import getDataApi from '../services/api';

const App = () => {
	// States
	const [userSearch, setUserSearch] = useState('');
	const [initialList, setInitialList] = useState();
	const [resultList, setResultList] = useState([]);

	// Handle data API
	useEffect(() => {
		getDataApi(userSearch).then((dataApi) => {
			setInitialList(dataApi.results);
			setResultList(dataApi.results);
		});
	}, [userSearch]);

	// Handle input
	const handleInputValue = (inputValue) => {
		setUserSearch(inputValue);
	};

	// Handle CharacterDetail
	const renderCharacterDetail = (props) => {
		const characterRoute = props.match.params.characterName;
		const existCharacter = resultList.find((eachResult) => {
			return characterRoute === eachResult.name;
		});
		return existCharacter ? (
			<CharacterDetail detail={existCharacter} userSearch={userSearch} />
		) : (
			<Error />
		);
	};

	// Handle filters
	const handleFilterStatus = (value) => {
		const filterStatus = initialList.filter(
			(eachItem) => eachItem.status === value
		);
		return setResultList(filterStatus);
	};

	const handleFilterGender = (value) => {
		const filterGender = initialList.filter(
			(eachItem) => eachItem.gender === value
		);
		return setResultList(filterGender);
	};

	return (
		<>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route exact path="/home">
					<CharacterList
						initialList={initialList}
						resultList={resultList}
						userSearch={userSearch}
						handleInputValue={handleInputValue}
						handleFilterStatus={handleFilterStatus}
						handleFilterGender={handleFilterGender}
					/>
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
