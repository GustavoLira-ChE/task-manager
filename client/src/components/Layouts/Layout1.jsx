import React from 'react';
import Navigation from '../Navigation';

const Layout1 = ({ children }) => {
    return (
        <div>
            <Navigation />
            { children }
            <footer>Footer</footer>
        </div>
    );
};

export default Layout1;