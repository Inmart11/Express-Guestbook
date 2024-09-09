const entries = [];


const { request } = require("express");

const renderIndex = (req,res)=>{
 res.render('index',{entries});
};

const renderNewEnrty = (req,res)=>{
    res.render('new-entry');
};

const createNewEntry = (req,res)=>{
    const newEntry = {
        tittle:req.body.tittle,
        content:req.body.body,
        published: new Date()
    };
    entries.push(newEntry);
    res.redirect('/');
};

module.exports = {
    renderIndex,
    renderNewEnrty,
    createNewEntry
}