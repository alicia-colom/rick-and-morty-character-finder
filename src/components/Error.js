import '../stylesheets/Error.scss';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
	return (
		<>
			<main className="error">
				<div className="error__container">
					<Link to="/home" className="error__container--link">
						Try again your search
					</Link>{' '}
					<h1 className="error__container--title">
						This character doesn't exist.
					</h1>
					<h2>I mean... It doesn't exist dead or alive.</h2>
					<h3>It's your invention, dude. </h3>
					<h4>You made it up!!</h4>
					<h5>Do you think you are better than us?!</h5>
					<h6>What the *$%* !?</h6>
				</div>
			</main>
		</>
	);
};

export default CharacterDetail;
