import  express from 'express';
import api from './api/index.js';
import catRouter from "./api/routes/cat-router.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'));


app.get('/api/v1/cat', (req, res) => {
    const cat = {
        cat_id: 1,
        name: 'Whiskers',
        birthdate: '2010-01-01',
        weight: 5,
        owner: 'John Doe',
        image: 'https://loremflickr.com/320/240/cat'
    };

    res.json(cat);
});

app.use('/', catRouter);
export default app;