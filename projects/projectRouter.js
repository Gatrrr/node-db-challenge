const express = require("express");

const Projects = require("./projectModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching projecs from database" });
    });
});

router.get('/:id', (req,res) => {
  const {id} = req.params
  Projects.getById(id)
    .then(project => {
      if(project){
        res.status(200).json(project);
      if(project.completed == 0){
        res.status(200).json({...project, completed: false})}
      else{
        res.status(200).json({...project, completed: true})}
      }
      else{
        res.status(404).json({message: `error retrieving the project.`})
      }
      })
})

router.post("/", (req, res) => {
  const project = req.body;
  if (!project.project_name) {
    return res.status(404).json({ message: "Missing project name" });
  }
  Projects.add(project)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding project to database" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Projects.getTasks(id)
    .then(tasks => {
      if (!tasks[0]) {
        res.status(404).json({ message: "Invalid project id" });
      } else {
        res.status(200).json(tasks);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching tasks from database" });
    });
});

router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const task = req.body;
  console.log(id);
  Projects.getById(id).then(project => {
    if (!project) {
      return res.status(404).json({ message: "Invalid Project ID" });
    }
    if (!task.task_description) {
      return res.status(404).json({ message: "Missing task description" });
    }
    console.log(task)
    Projects.addTask(id, task)
      .then(count => {
        res.status(201).json(count);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Error adding task to database" });
      });
  });
});

module.exports = router;