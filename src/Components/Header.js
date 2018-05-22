import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



class Header extends Component {
    render() {
        var header = {
            height: '60px',
            display: 'flex',
	        flexDirection: 'column',
	        flexWrap: 'wrap',
	        justifyContent: 'center',
	        alignItems: 'flex-start',
            alignContent: 'center',
            padding: '10px'
        }
        return (
            <div >
                <AppBar position="static" style={header} >

                <Typography variant="title" color="inherit" >
                Project Staffing Application
                </Typography>
                </AppBar>
            </div>
        );
    }
}

export default Header;
