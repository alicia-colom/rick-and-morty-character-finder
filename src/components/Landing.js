import '../stylesheets/Landing.scss';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Landing = () => {
	return (
		<>
			<div className="landing">
				<Header />
				<main className="landing__main">
					<h1 className="landing__main--title">
						Find the craziest characters from your favourite TV show and know
						them better
					</h1>
					<Link
						to="/home"
						className="landing__main--link"
						title="Go to Rick and Morty finder"
					>
						Let's go!
					</Link>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Landing;
