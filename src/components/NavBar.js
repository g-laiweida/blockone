import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav>
            <Link to="/" className="link">
            <h3 className="header">Block.One</h3>
            </Link>
            <ul className="nav-links">
                <Link to="/transactions" className="link">
                <li>My Transactions</li>
                </Link>
                <Link to="/trade" className="link">
                <li>Make new transaction</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar