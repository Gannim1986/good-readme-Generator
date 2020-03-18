const axios = require('axios');
require('dotenv').config

const api = {
    getUser(username) {
        return axios
            .get(
                `https://api.github.com/users/${username}?client_id=${process.env.clientID}&client_secret=${process.env.clientSecret}`
            )
            .catch(err => {
                console.log("user not found");
                process.exit(1);
            });
    }
};

module.exports = api;
// &client_secret=${process.env.clientsecret}


