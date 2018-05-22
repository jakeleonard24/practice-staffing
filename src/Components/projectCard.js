import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class ProjectCard extends Component {
    render() {
        var iconButton = {
            height: '40px'
        }
        return (
            <Card className="projectCard">
            <CardContent>
                <Typography variant="headline">{this.props.projectName}</Typography>
                <Typography>{this.props.clientName}</Typography>
                <Typography>{this.props.projectContractAmount}</Typography>
                <Typography>{this.props.projectType}</Typography>
                <Typography>{this.props.projectStartDate}</Typography>
                <Typography>{this.props.projectEndDate}</Typography>
                </CardContent>

                <CardActions>
                <IconButton>
                   <img style={iconButton} src="https://cdn1.iconfinder.com/data/icons/e-commerce-24/94/group-512.png"/>
                </IconButton>
                <IconButton>
                   <img style={iconButton} src="http://www.free-icons-download.net/images/up-arrow-down-arrow-icon-84290.png"/>
                </IconButton>
                <IconButton>
                   <img style={iconButton} src="https://png.icons8.com/metro/1600/download.png"/>
                </IconButton>
                <IconButton>
                   <img style={iconButton} src="https://image.flaticon.com/icons/svg/61/61391.svg"/>
                </IconButton>
                </CardActions>
                </Card>
        );
    }
}

export default ProjectCard;