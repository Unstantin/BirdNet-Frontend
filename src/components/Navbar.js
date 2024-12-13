import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/observations">Наблюдения</Link>
            <Link to="/taxons">Таксоны</Link>
            <Link to="/profile">Профиль</Link>
        </nav>
    );
};

export default Navbar;