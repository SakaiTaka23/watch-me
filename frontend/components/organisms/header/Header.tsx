import { AppBar, Box, Button, makeStyles, Modal, Toolbar, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../hooks/firebase/authContext';
import Link from 'next/link';
import { useFirebase } from '../../../hooks/firebase/useFirebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const { Logout } = useFirebase();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <Box display='flex' mx={3}>
                <Link href='/schedule/new'>
                  <Typography variant='subtitle1'>
                    <a>NEW</a>
                  </Typography>
                </Link>
              </Box>
              <Button onClick={handleOpen}>
                <Typography variant='subtitle1'>LOGOUT</Typography>
              </Button>
              <Modal open={open} onClose={handleClose} closeAfterTransition>
                <div className={classes.paper}>
                  <Typography>LOGOUT?</Typography>
                  <Button onClick={() => Logout()}>Confirm</Button>
                </div>
              </Modal>
            </>
          ) : (
            <>
              <Box display='flex' mx={3}>
                <Link href='/signin' passHref>
                  <Typography variant='subtitle1'>
                    <a>SIGN IN</a>
                  </Typography>
                </Link>
              </Box>
              <Link href='/signup'>
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
