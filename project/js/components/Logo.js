import React, { Component } from 'react';

import styles from './header.scss';

class Logo extends Component {

    render() {
        return (
            <a className={styles.logo} target="_blank" href="http://www.google.com">{}</a>
        );
    }

}

export default Logo
