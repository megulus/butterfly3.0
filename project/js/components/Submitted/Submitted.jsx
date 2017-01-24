import React, { Component } from 'react';
import classNames from 'classnames';

import grid from '../../../scss/app.scss';
import styles from './Submitted.css';

class Submitted extends Component {

    render() {
        return (
            <div className={classNames(grid.centerColumn, styles.submitted)}>
                <p className={styles.banner}>THANK YOU FOR THE EXTRA FEEDBACK</p>
                <p>Have a nice day!</p>
                <div></div>
            </div>
        );
    }

}

export default Submitted