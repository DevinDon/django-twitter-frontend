import { useScrollTrigger } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import { User } from '../../services/apis';

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

export const AppToolbar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });
  const { avatar } = useSelector<AppState, User>(state => state.accountReducer);

  return <>
    <AppBar position="sticky" elevation={trigger ? 2 : 0}>
      <Toolbar className={classes.toolbar}>
        <Avatar src={avatar} className={classes.avatar}></Avatar>
        <Typography variant="h6" className={classes.title}>Twitter</Typography>
      </Toolbar>
    </AppBar>
  </>;
}

export default AppToolbar;
