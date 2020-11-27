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
	const [initialList, setInitialList] = useState([]);
	const [resultList, setResultList] = useState([]);
	const [filterStatus, setFilterStatus] = useState('All');
	const [filterGender, setFilterGender] = useState('All');
	const [isSort, setIsSort] = useState(false);

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

	// HANDLE FILTERS
	// Set status value
	const handleFilterStatus = (value) => {
		return setFilterStatus(value);
	};

	// Set gender value
	const handleFilterGender = (value) => {
		return setFilterGender(value);
	};

	// Sort by name
	const handleSort = (value) => {
		return setIsSort(value);
	};

	// Filters
	const filterResults = initialList
		.filter((eachItem) => {
			return filterStatus === 'All' || eachItem.status.toLowerCase() === filterStatus;
		})
		.filter((eachItem) => {
			return filterGender === 'All' || eachItem.gender.toLowerCase() === filterGender;
		})
		.sort((a, b) => {
			if (!isSort) {
				return 0;
			}
			if (a.name > b.name) {
				return 1;
			}
			if (a.name < b.name) {
				return -1;
			}
			return 0;
		});

	return (
		<>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route exact path="/home">
					<CharacterList
						initialList={initialList}
						resultList={filterResults}
						handleSort={handleSort}
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
