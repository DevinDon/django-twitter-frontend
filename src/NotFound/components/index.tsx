import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styles from '../index.module.css';
import { useHistory } from 'react-router'


export default function TopBar() {
    const history = useHistory()
    return (
        <div>
            <div className={styles.topbar}>
                <ArrowBackIcon onClick={history.goBack} className={styles.icon}></ArrowBackIcon>
                <div>未找到</div>
            </div>
        </div>
    )
}

