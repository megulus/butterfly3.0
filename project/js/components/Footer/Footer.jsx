import React, {Component} from 'react';

import grid from '../../../scss/app.scss';
import styles from './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className={styles.footer}>
                <div className={grid.centerColumn}>
                    <p>
                        Butterfly. Your team's happiness manager.<br/>&copy; 2016 AnonyMessenger, Inc.
                    </p>
                    <a className={styles.link} href="https://butterfly.ai">butterfly.ai</a>
                </div>

            </footer>
        );
    }

}

export default Footer