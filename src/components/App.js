import '../stylesheets/App.scss';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route exact path="/home">
					<CharacterList />
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
