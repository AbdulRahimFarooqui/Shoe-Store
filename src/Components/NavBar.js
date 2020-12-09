import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import "./../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "cadetblue",
  },
  
  title:{
    flexGrow:-1
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h6" color="inherit" className={classes.title}>
            AR's Shoe Store
          </Typography>
          <div style={{marginLeft:"70%"}}></div>
          <Link to="/">
          <Button style={{marginRight:'6px'}}>
            Home
          </Button>
          </Link>
          <Link to="/products">
          <Button>
            Products
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
