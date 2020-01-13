const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.findProjects()
  .then(projects => {
    const queryCompleted = projects.map(project => {
      if (project.completed == 0) {
        return {
          ...project,
          completed: false
        }
      } else if (project.completed == 1) {
        return {
          ...project,
          completed: true
        }
      }
    })
    res.json(queryCompleted);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.findProjectById(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get project' });
  });
});

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.findTasks(id)
  .then(tasks => {
    if (tasks.length) {
      res.json(tasks);
    } else {
      res.status(404).json({ message: 'Could not find tasks for given project' })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
});

// router.post('/:id/tasks', (req, res) => {
//   const taskData = req.body;
//   const { id } = req.params; 

//   Projects.addTask(taskData)
//     .then(task => {
//       res.status(201).json(task);
//     })
//     .catch (err => {
//       console.log(err);
//       res.status(500).json({ message: 'Failed to create new task' });
//     });
// });

router.post('/:id/tasks', (req, res) => {
  const taskData = req.body;
  const { id } = req.params;

  Projects.addTask(taskData)
  .then(newTask => {
    res.status(201).json(newTask);
  })
  .catch (err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to create new task' });
  });
});

module.exports = router;