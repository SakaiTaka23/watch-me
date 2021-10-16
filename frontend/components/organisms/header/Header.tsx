import { AppBar, Box, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { AuthContext } from '../../../hooks/firebase/authContext';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  return (
    <Box className={classes.root} mb={3}>
      <AppBar position='static'>
        <Toolbar>
          <Link href='/' passHref>
            <Typography variant='h6' className={classes.title}>
              <a>Watch-ME</a>
            </Typography>
          </Link>
          {user ? (
            <>
              <Box display='flex' mx={3}>
                <Link href='/'>
                  <Typography variant='subtitle1'>
                    <a>MY PAGE</a>
                  </Typography>
                </Link>
              </Box>
              <Link href='logout' passHref>
                <Typography variant='subtitle1'>
                  <a>LOGOUT</a>
                </Typography>
              </Link>
            </>
          ) : (
            <>
              <Box display='flex' mx={3}>
                <Link href='signin' passHref>
                  <Typography variant='subtitle1'>
                    <a>SIGN IN</a>
                  </Typography>
                </Link>
              </Box>
              <Link href='signup'>
                <Typography variant='subtitle1'>
                  <a>SIGN UP</a>
                </Typography>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
