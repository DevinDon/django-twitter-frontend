import { CircularProgress } from '@material-ui/core';
import styles from './index.module.css';

const Loading = () => {

  return (
    <div className={styles.loading}>
      <CircularProgress />
    </div>
  );

}

export default Loading;
