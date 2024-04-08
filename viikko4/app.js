import express from 'express';
const hostname = '127.0.0.1';
const app = express();
app.use('/public', express.static('public'));
const port = 3000;

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

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});