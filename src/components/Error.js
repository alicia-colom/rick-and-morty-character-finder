import '../stylesheets/Error.scss';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const CharacterDetail = (props) => {
	return (
		<>
			<Header />

			<main className="error">
				<Link to="/home" className="error__link">
					Back to search
				</Link>
				<div className="error__container">
					<h2 className="error__container--title">
						This character doesn't exist.
					</h2>
					<h3>I mean... It doesn't exist dead or alive.</h3>
					<h4>It's your invention, dude. You made it up!</h4>
					<h5>Try again your search.</h5>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default CharacterDetail;
