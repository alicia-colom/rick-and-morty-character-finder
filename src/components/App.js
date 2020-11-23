import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../stylesheets/App.scss';
import Landing from './Landing';
import Blog from './Blog';
import Article from './Article';
import Loader from './Loader';

const App = () => {
	const fullList = [1, 2, 3];

	// // -- Hook = estado en funcionales:
	// const [filterId, setFilterId] = useState();
	// const [filterValue, setFilterValue] = useState();

	// // -- Estructura para realizar un filtro:
	// const listFilter = fullList.filter((eachItem) =>
	// 	eachItem.name.toUpperCase().includes(filterValue.toUpperCase)
	// );

	return (
		<>
			<div className="App">
				<header className="header">
					<h1>Hello world!</h1>
				</header>
				<main>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/blog">
									<button>Blog</button>
								</Link>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route exact path="/blog">
							<Blog />
						</Route>
					</Switch>

					<Loader />

					<a
						href="https://www.google.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Link
					</a>
					<div></div>
				</main>
			</div>
		</>
	);
};

export default App;
