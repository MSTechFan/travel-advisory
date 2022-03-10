import React from 'react';
import { AutoComplete } from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@mui/material';
import searchIcon from '@mui/icons-material/Search';

import useStyles from './styles'

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explor new places
          </Typography>
          {/* <AutoComplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <searchIcon/>
              </div>
              <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input:classes.inputInput}}/>
            </div>
          {/* </AutoComplete> */}
        </Box>
      </toolbar>
    </AppBar>
  )
}

export default Header