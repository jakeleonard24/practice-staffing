const express = require('express')
const bodyParser = require('body-parser')
,cors = require('cors')
,projects = require('./projects')


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/projects',(req,res) => {
    res.status(200).send(projects)
})

app.post('/newproject', (req, res) => {
    console.log(req.body)
    projects.projects.push(req.body)
    res.status(200).send(projects)
})




const port = 3336;

app.listen(port, () => console.log(`port port port port port ${port}`));