const db = require('../data/db-config');

function findProjects() {
  return db('projects')
    .select();
};

module.exports = {
  findProjects,
  // addProject,
  // findTasks,
  // addTasks,
  // findResources,
  // addResource
};