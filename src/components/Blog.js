// import '../stylesheets/blog.scss';
import { useState } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom';
import Filter from './Filter';
import Article from './Article';
import ArticleList from '../data/data.json';

const Blog = (props) => {
	const [data, setData] = useState(ArticleList);

	return (
		<div className="blog">
			<h1>Blog</h1>
			<p>Soy el archivo de Blog.js</p>
			<main>
				<Filter />
				<Switch>
					<Route path="/article/:name" component={Article} />
					<Route path="/article/:name">
						<Article articleData={data} {...props} />
					</Route>
				</Switch>
				<ul>
					{ArticleList.map((eachArticle, index) => (
						<li key={eachArticle.id}>
							<Link to={'/article/' + eachArticle.name}></Link>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
};

export default Blog;
