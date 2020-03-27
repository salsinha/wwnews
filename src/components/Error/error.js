import React from 'react';
import styles from './error.module.scss';

const Error = () => {
    return (
        <div className={styles.error}>
            <p>Something went wrong!</p>
            <p>Please try again</p>
        </div>
    )
}

export default Error;
