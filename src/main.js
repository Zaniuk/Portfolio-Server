const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World');
    }
);
app.use('/projects', require('./routes/projects'));
app.use('/certifications', require('./routes/certifications'));
app.use('/home', require('./routes/home'));
app.listen(3000, () => {
    console.log('Server on port 3000');
    try{
        // sequelize.authenticate();
    }catch(e){
        console.log(e);
    }
}
);
