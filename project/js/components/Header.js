import React, { Component } from 'react';

import styles from './header.scss';
import grid from './app.scss';

import Logo from './Logo';

class Header extends Component {

    render() {
        return (
            <header>
                <div className={grid.leftsidebar}><Logo /></div>
                <div className={grid.content}>nag poke worry <span className={styles.redBg}>GRUMP!!</span></div>
            </header>
        );
    }

}

export default Header
