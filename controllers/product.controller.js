const Product = require('../models/product.model');

exports.test = ((req, res) => {

    // send json response >>>
    let jsonResponse = { name: 'aniket', age: 24, dob:'1994-04-02' };
    res.json(jsonResponse);

    // send html response >>
    let htmlResponse = `<html><body><h1>Hello, World!</h1></body></html>`; 
    res.send(htmlResponse);
});
