"use strict";


const User = require("../../models/UserStorage");


const output = {
    home : (req,res) => {
        res.render("home/index");
    },
    
    login : (req,res) => {
        res.render("home/login");
    },
};



const process = {
    login:(req,res) => {
        const user = new User(req.body);
        const response = user.enter();
        console.log(response);

    },
};

module.exports = {
    output,
    process,
};