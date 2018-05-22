import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

class ProjectModal extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            businessUnit: "",
            projectName: "",
            ps: "", 
            status: "",
            projectStartDate: "",
            engagementDirector: "",
            clientName: "",
            ad: "",
            projectType: "",
            projectContractAmount: "",
            projectEndDate: "",
            notes: ""

        }
        this.submit = this.submit.bind(this);
    }

        handleChange(property, value){
            this.setState({
                [property]: value
            })
    }

    submit(){
        axios.post("/newproject", this.state).then(response => {
            this.props.handleChange('projects', response.data.projects)
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>{this.props.projectName ? 'Project Details' : 'New Project'}</h1>
                <div  className="modalBody">
               <div className="leftModalColumn">
               <TextField
                 id="search"
                 label="Business Unit"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.handleChange('businessUnit', e.target.value)}}
                 />

                 <TextField
                 id="search"
                 label="Project Name"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.handleChange('projectName', e.target.value)}}
                 />

                 <TextField
                 id="search"
                 label="PS"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.handleChange('ps', e.target.value)}}
                 />

                 <TextField
                 id="search"
                 label="Status"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.handleChange('status', e.target.value)}}
                 />

                 <TextField
                 id="search"
                 label="Start Date"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.handleChange('projectStartDate', e.target.value)}}
                 />

                 <TextField
                 id="search"
                 label="Engagement Director"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.handleChange('engagementDirector', e.target.value)}}
                 />
               </div>

               <div className="leftModalColumn">
               <TextField
                 id="search"
                 label="Client Name"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.handleChange('clientName', e.target.value)}}
                 />

                 <TextField
                 id="search"
                 label="AD"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.handleChange('ad', e.target.value)}}
                 />

                 <TextField
                 id="search"
                 label="Project Type"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.handleChange('projectType', e.target.value)}}
                 />

                 <TextField
                 id="search"
                 label="SOW Amount"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.handleChange('projectContractAmount', e.target.value)}}
                 />

                 <TextField
                 id="search"
                 label="End Date"
                 
                type="search"
                
                margin="normal"
                onChange={(e) => {this.handleChange('projectEndDate', e.target.value)}}
                 />

                </div>
               </div>
               <textarea className="modalNotes" onChange={(e) => {this.handleChange('notes', e.target.value)}}> </textarea>
               <div className="bottomModal"><Button onClick={this.submit} variant="raised" color="primary">Create Project</Button></div>
            </div>
        );
    }
}

export default ProjectModal;