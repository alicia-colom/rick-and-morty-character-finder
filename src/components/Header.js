import '../stylesheets/Header.scss';
import { Link } from 'react-router-dom';
import logoRM from '../images/Rick-Morty_logo.png';

const Header = (props) => {
	return (
		<header className="header">
			<Link to="/">
				<img
					className="header__logo"
					src={logoRM}
					alt="Logo Rick and Morty"
					title="Back to landing page"
				/>
			</Link>
		</header>
	);
};

export default Header;
