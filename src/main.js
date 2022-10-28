import express from 'express';
import morgan from 'morgan';
import sequelize from './db.js';
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.listen(3000, () => {
    console.log('Server on port 3000');
    try{
        sequelize.authenticate();
        console.log('Database connected');
    }catch(e){
        console.log(e);
    }
}
);
