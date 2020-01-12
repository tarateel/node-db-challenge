exports.seed = async (knex) => {
  await knex('tasks').insert([
    { task_description: 'task-1 description', project_id: 1 },
    { task_description: 'task-2 description', project_id: 1 },
    { task_description: 'task-3 description', project_id: 1 },
    { task_description: 'task-4 description', project_id: 2 },
    { task_description: 'task-5 description', project_id: 2 },
    { task_description: 'task-6 description', project_id: 2 },
    { task_description: 'task-6 description', project_id: 3 },
    { task_description: 'task-6 description', project_id: 3 },
    { task_description: 'task-7 description', project_id: 3 },
    { task_description: 'task-8 description', project_id: 4 },
    { task_description: 'task-9 description', project_id: 4 }
  ])
};