import React, { Component } from 'react';
import classNames from 'classnames';

import grid from '../../../scss/app.scss';
import styles from './Header.css';

import Logo from './Logo';

class Header extends Component {

    render() {
        return (
            <header className={styles.banner}>
                <div className={grid.headersidebar}><Logo /></div>
                <div className={classNames(grid.headermain, styles.headline)}>Butterfly, Inc.</div>
            </header>
        );
    }

}

export default Header
