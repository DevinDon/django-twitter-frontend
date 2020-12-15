import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { getRandomAvatar } from '../../utils';

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
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    getRandomAvatar()
      .then(avatar => setAvatar(avatar));
  }, []);

  return <>
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Avatar src={avatar} className={classes.avatar}></Avatar>
        <Typography variant="h6" className={classes.title}>Twitter</Typography>
      </Toolbar>
    </AppBar>
  </>;
}

export default AppToolbar;
