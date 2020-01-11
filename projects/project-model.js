const db = require('../data/db-config');

function findProjects() {
  return db('projects')
    .select();
};

function findProjectById(id) {
	return db('projects')
		.where({ id })
		.first();
};

async function addProject(project) {
	const [id] = await db('projects').insert(project)
	return db('projects')
		.where({ id })
		.first()
};

function findTasks(id) {
	return db('tasks as t')
		.join('projects as p', 'p.id', 't.project_id')
		.where({ project_id:id })
		.select('t.id', 'p.project_name', 'p.project_description', 't.task_name', 't.task_description', 't.task_notes', 't.completed')
		.orderBy('t.id', 'asc')
};

function findResources(id) {
	return db('resources as r')
		.join('projects as p', 'p.id', 'r.project_id')
		.where({ project_id:id })
		.select('r.id', 'p.project_name', 'p.project_description', 'r.resource_name', 'r.resource_description')
		.orderBy('t.id', 'asc')
};

module.exports = {
  findProjects,
  findProjectById,
  addProject,
  findTasks,
  // addTasks,
  // findResources,
  // addResource
};