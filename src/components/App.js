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
	const [resultList, setResultList] = useState([]);
	const [filterList, setFilterList] = useState();
	// console.log(resultList, filterList);
	// console.log(userSearch);

	// Handle data API
	useEffect(() => {
		getDataApi(userSearch).then((dataApi) => {
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

	// Handle filter status
	const handleFilterStatus = (value) => {
		const filterStatus = resultList.filter(
			(eachItem) => eachItem.status === value
		);
		return setFilterList(filterStatus);
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
						handleFilterStatus={handleFilterStatus}
						filterList={filterList}
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
};;;

export default App;
