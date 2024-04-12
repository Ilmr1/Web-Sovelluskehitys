import { addCat } from '../models/cat-model.js';

export const postCat = (req, res) => {
    console.log(req.body); // form fields
    console.log(req.file); // form files

    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }

    const cat = {
        name: req.body.name,
        age: req.body.age,
        filename: req.file.filename
    };

    addCat(cat);
    res.status(200).send('File uploaded successfully.');
};