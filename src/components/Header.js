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
					alt="Logo Rick y Morty"
					title="Volver al inicio"
				/>
			</Link>
		</header>
	);
};

export default Header;
