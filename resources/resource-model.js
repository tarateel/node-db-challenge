const db = require('../data/db-config');

function findResources() {
  return db('resources as r')
    .select();
};

function findResourceById(id) {
	return db('resources')
		.where({ id })
		.first();
};

function addResource(resource) {
  return db('resources')
    .insert(resource)
		.then(ids => {
      return findResourceById(ids[0])
    })
};

module.exports = {
  findResources,
  findResourceById,
  addResource
};