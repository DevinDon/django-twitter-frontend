import { useScrollTrigger } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MaterialUIToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { User } from '../../apis';
import { AppState } from '../../reducers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      fontWeight: 'bold'
    },
    avatar: {
      height: '32px',
      width: '32px',
      marginRight: theme.spacing(2),
    },
    toolbar: {
      backgroundColor: 'white',
      color: 'black'
    },
  }),
);

const Toolbar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });
  const { avatar } = useSelector<AppState, User>(state => state.userReducer);

  return <>
    <AppBar position="sticky" elevation={trigger ? 2 : 0}>
      <MaterialUIToolbar className={classes.toolbar}>
        <Avatar src={avatar} className={classes.avatar}></Avatar>
        <Typography variant="h6" className={classes.title}>主页</Typography>
      </MaterialUIToolbar>
    </AppBar>
  </>;
}

export default Toolbar;
