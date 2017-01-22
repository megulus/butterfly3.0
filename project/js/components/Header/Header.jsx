import React, { Component } from 'react';
import classNames from 'classnames';

import grid from '../../../scss/app.scss';
import styles from './header.css';

import Logo from './Logo';

class Header extends Component {

    render() {
        return (
            <header className={styles.banner}>
                <div className={grid.leftsidebar}><Logo /></div>
                <div className={classNames(grid.content, styles.headline)}>Butterfly, Inc.</div>
            </header>
        );
    }

}

export default Header
