import React, { Component } from 'react';

import Header from '../Header/Header';

import styles from './AppView.css';

class AppView extends Component {

    render() {
        return (
            <div className={styles.appBackground}>
                <Header />
            </div>

        );
    }

}

export default AppView
