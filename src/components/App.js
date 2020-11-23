import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
	// const [data, setData] = useState();

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
