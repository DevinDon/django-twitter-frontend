import { CircularProgress } from '@material-ui/core';
import React from 'react';
import styles from './index.module.css';

export const LoadingComponent = () => {

  return (
    <div className={styles.loading}>
      <CircularProgress />
    </div>
  );

}

export default LoadingComponent;
