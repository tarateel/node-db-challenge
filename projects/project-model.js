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

function addProject(project) {
  return db('projects')
    .insert(project)
		.then(ids => {
      return findProjectById(ids[0])
    })
};

function findTasks(id) {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
		.where({ project_id:id })
		.select('t.id', 'p.project_name', 'p.project_description', 't.task_description', 't.task_notes', 't.completed')
		.orderBy('t.id', 'asc')
};

function addTask(newTask) {
  return db('tasks')
    .insert(newTask)
		.then(ids => {
      return findTasks(ids[0])
    })
};

module.exports = {
  findProjects,
  findProjectById,
  addProject,
  findTasks,
  addTask
};