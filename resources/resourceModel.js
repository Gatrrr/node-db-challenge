const db = require('../data/dbConfig.js')

module.exports = {
    get,
    getById,
    add
}

function get(){
    return db('resources');
}

function getById(id){
    return get().where({ id }).first();
}

function add(resource) {
    return db("resources").insert(resource);
}