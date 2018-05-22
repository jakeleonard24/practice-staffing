import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ProjectCard from './Components/projectCard'
import Header from './Components/Header'
import ProjectFilters from "./Components/ProjectFilters"
import { CLIENT_RENEG_LIMIT } from 'tls';


class App extends Component {
  constructor(){
    super()
    this.state = {
      projects:'',
      clientName: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(property, value){
    console.log(property, value)
    this.setState({
      [property]: value
    })
  }

componentDidMount(){
  axios.get("/projects").then((response)=> {
    console.log(response.data)
    this.setState({projects: response.data.projects})
  })
}

  render() {
    console.log(this.state)
    
    var projectList = this.state.clientName ? this.state.projects.filter((project, i) => {
      return project.clientName.toLowerCase().startsWith(this.state.clientName.toLowerCase())
    }).map((project, i) => {
      return(
        <ProjectCard key={i} projectName={project.projectName} clientName={project.clientName} projectType={project.projectType} projectStartDate={project.projectStartDate} projectEndDate={project.projectEndDate} projectContractAmount={project.projectContractAmount}></ProjectCard>
      )
    }) : this.state.projects ? this.state.projects.map((project, i)=> {
      return(
        
        <ProjectCard key={i} projectName={project.projectName} clientName={project.clientName} projectType={project.projectType} projectStartDate={project.projectStartDate} projectEndDate={project.projectEndDate} projectContractAmount={project.projectContractAmount}></ProjectCard>
      )
    }) : <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
    return (
      <div>
        <Header />
        
        <div className="pageBody">
        <ProjectFilters handleChange={this.handleChange} />
      <div className="projectCardContainer">
      
      
       {projectList}
       
      </div>
      </div>
      </div>
    );
  }
}

export default App;
