import React, { Component } from 'react';
import ProjectModal from "./ProjectModal"
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '500px'
    }
  };

class ProjectFilters extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({
            open: true
        })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }
    
    render() {
        var filterSection = {
            width: '80%',
            margin: '10px',
            display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	alignContent: 'center'
            
        }

        var paper = {
            padding: '20px'
        }

        var modalStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
    width: '200px',
    backgroundColor: 'white',
    WebkitBoxShadow: '3px 3px 5px 6px #ccc', /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    MozBoxShadow:    '3px 3px 5px 6px #ccc' , /* Firefox 3.5 - 3.6 */
  boxShadow:         '3px 3px 5px 6px #ccc',
    padding: '15px',
        }
        return (
            <div style={filterSection}>
            <Paper style={paper}>
               <Typography variant="headline"> Project Filters </Typography>
                <div className="filterSection">
                <TextField
                 id="search"
                 label="Customer Name"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.props.handleChange('clientName', e.target.value)}}
                 />
                 </div>
            </Paper>
            <Paper>
                <Button onClick={this.handleOpen} variant="raised" color="primary">New Project</Button>
            </Paper>

            <Modal
             style={customStyles}
             isOpen={this.state.open}
             onRequestClose={this.handleClose}
             >
            <ProjectModal handleChange={this.props.handleChange} />
            </Modal>
            </div>
        );
    }
}

export default ProjectFilters;